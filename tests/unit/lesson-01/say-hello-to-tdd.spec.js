const DIMENSION_CONTENT = {
  'C-132': 'It was the universe in which the Rick and Morty of the first two volumes of the Rick and Morty comic series have been said to be from.',
  'C-137': 'The universe where the mainstream Rick and Morty are often identified as coming from.',
  'Beta B-45': 'This is an alternate reality in which butts are faces and faces are butts',
  '35-C': 'This is an alternate dimension that Rick and Morty visited in the Pilot episode.' +
    'WARNING! Putting Mega Seed to your ass can causes loss of motor and brain function for several days.',
}

const ADULT_DIMENSION_IDS = ['Beta B-45'];

class RestrictedNavigationError extends Error {}

const isBetaDimension = (dimensionID) => ADULT_DIMENSION_IDS.includes(dimensionID);

const ADULTS_ONLY_ERROR_MESSAGE = 'Adults only asfas!';
const exploreDimensionAsChildren = (dimensionID) => {
  if(isBetaDimension(dimensionID)) {
    throw new RestrictedNavigationError(ADULTS_ONLY_ERROR_MESSAGE);
  }
  return DIMENSION_CONTENT[dimensionID];
}

describe(exploreDimensionAsChildren, () => {
  it.each([
      ['C-137', DIMENSION_CONTENT["C-137"]],
      ['35-C', DIMENSION_CONTENT['35-C']],
      ['undef', undefined],
  ])('should allow us to explore %s dimension content to eq %s', (dimensionId, expectedContent) => {
    expect(exploreDimensionAsChildren(dimensionId)).toEqual(expectedContent)
  });

  it('should throw an error when adults only dimension visited', () => {
    expect(() => exploreDimensionAsChildren('Beta B-45')).toThrowErrorMatchingSnapshot();
  });
})
