/* eslint-disable import/first */
console.log('file start');

import mockable from './sequence/mockable';
import notMockable from './sequence/not-mockable';

console.log(mockable);
console.log(notMockable);

// REPLACE IMPLEMENTATION OF THE MODULE
jest.mock('./sequence/mockable', () => {
  console.log('mock applied');
  return 'mocked mockable';
});

console.log(mockable);
console.log(notMockable);

describe('Sequence sample', () => {
  console.log('main context');

  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    console.log('main context beforeEach');
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
