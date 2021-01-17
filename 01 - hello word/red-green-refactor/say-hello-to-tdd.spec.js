const DIMENSION_CONTENT = {
  'C-132': 'It was the universe in which the Rick and Morty of the first two volumes of the Rick and Morty comic series have been said to be from.',
  'C-137': 'The universe where the mainstream Rick and Morty are often identified as coming from.',
  'Beta B-45': 'This is an alternate reality in which butts are faces and faces are butts',
  '35-C': 'This iss an alternate dimension that Rick and Morty visited in the Pilot episode.' +
    'WARNING! Putting Mega Seed to your ass can causes loss of motor and brain function for several days.',
}

const ADULT_DIMENSION_IDS = ['Beta B-45'];

const isBetaDimension = (dimensionID) => ADULT_DIMENSION_IDS.includes(dimensionID);

const exploreDimensionAsChildren = (dimensionID) => {
  if(isBetaDimension(dimensionID)) {
    throw new Error('This is adults only dimension, this section is closed for you')
  }

  return DIMENSION_CONTENT[dimensionID];
}

describe(exploreDimensionAsChildren, () => {
  it('should allow us to explore dimensions we want', () => {
    expect(exploreDimensionAsChildren('C137')).toEqual(DIMENSION_CONTENT['C137']);
  });

  describe('when dimension is not found', () => {
    it('should return undefined', () => {
      expect(exploreDimensionAsChildren('non existing')).not.toBeDefined();
    });
  })

  describe('when we try to explore adult dimension', () => {
    it('should restrict us from doing that', () => {
      expect(() => exploreDimensionAsChildren('Beta B-45')).toThrowErrorMatchingSnapshot()
    });
  })
})
