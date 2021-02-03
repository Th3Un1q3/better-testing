import _ from 'lodash';

const DRUNK_RICK_SOUNDS = [
  'burp',
  'urr',
  'wubba lubba dub dub',
  'aaaae',
  'I love you Morty you know',
  'I really appreciate your help',
];

const BASE_ALCOHOL_SCORE = 50;

const soberSpeech = (phrase) => phrase;

const drunkSpeech = (phrase) => {
  const interruptionsFrequency = _.random(3,phrase.length - 1);
  const partsOfPhrase = _.chunk(phrase, interruptionsFrequency);

  return partsOfPhrase.map((partial, index) => {
    const simplySayPartial = partial.join('');
    const isLastPart = index >= partsOfPhrase.length - 1;
    return isLastPart ? simplySayPartial : `${simplySayPartial}...${_.sample(DRUNK_RICK_SOUNDS)}...`;
  }).join('');
}

const alcoholTakenPerTime = 10;

class RickSanchez {

  constructor() {
    this.alcoholScore = BASE_ALCOHOL_SCORE;
    this.sayPhrase = soberSpeech;
  }

  drinkFromFlask() {
    this.alcoholScore = this.alcoholScore + alcoholTakenPerTime;

    if(this.#isDrunk) {
      this.sayPhrase = drunkSpeech;
    }
  }

  areYouAllRight() {
    return this.sayPhrase('I am fine dude!');
  }

  get #isDrunk() {
    const twoTimesDrink = alcoholTakenPerTime * 2;
    const toBeDrunkScore = BASE_ALCOHOL_SCORE + twoTimesDrink;
    return this.alcoholScore > toBeDrunkScore;
  }
}

describe(RickSanchez, () => {
  const grandpa = new RickSanchez();

  describe('when drinks from his flask one time', () => {
    beforeEach(() => {
      grandpa.drinkFromFlask();
    });

    test('should respond as sober', () => {
      expect(grandpa.areYouAllRight()).toMatchSnapshot();
    });
  });

  describe('when drinks twice from his flask', () => {
    beforeEach(() => {
      grandpa.drinkFromFlask();
      grandpa.drinkFromFlask();
    });

    test('should talk as drunk', () => {
      const drunkSpeechSigns = expect.stringMatching(new RegExp(`(${DRUNK_RICK_SOUNDS.join('|')})`));

      console.log(grandpa.areYouAllRight());

      expect(grandpa.areYouAllRight()).toEqual(drunkSpeechSigns);
    })
  })
});
