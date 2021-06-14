const sqrt = (num) => {
  if (num >= 0) {
    return Math.sqrt(num);
  }
  throw Error();
};

describe(sqrt, () => {
  it('should throw an exception with NaN', () => {
    expect(() => sqrt(NaN)).toThrow(expect.any(Error));
  });

  it('should throw an exception with negative number', () => {
    expect(() => sqrt(-10)).toThrow(expect.any(Error));
  });

  it('should return correct sqrt of a value', () => {
    const value = Math.round(Math.random() * 100);
    expect(sqrt(value)).toEqual(Math.sqrt(value));
  });
});
