const inRange = (subject, rangeStart, rangeEnd) => {
    return subject >= rangeStart && subject <= rangeEnd;
}

describe(inRange, () => {
  test('defined boundaries work', () => {
    expect(inRange(5, 5, 10)).toBeTruthy()
    expect(inRange(5, 5, 5)).toBeTruthy()
    expect(inRange(7, 5, 10)).toBeTruthy()
    expect(inRange(10, 5, 10)).toBeTruthy()
    expect(inRange(4, 5, 10)).toBeFalsy()
    expect(inRange(11, 5, 10)).toBeFalsy()
  })
});
