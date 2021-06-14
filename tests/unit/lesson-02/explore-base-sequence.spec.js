console.log('file start');

describe('Sequence base sample', () => {
  console.log('main context');

  beforeEach(() => {
    console.log('main context beforeEach');
  });

  beforeAll(() => {
    console.log('beforeAll');
  });

  afterAll(() => {
    console.log('main context after all');
  });

  test('main context test', () => {
    console.log('main context test execution');
  });

  describe('child context', () => {
    console.log('child context');

    beforeEach(() => {
      console.log('child context beforeEach');
    });

    test('child context test', () => {
      console.log('child context test execution');
    });
  });
});
