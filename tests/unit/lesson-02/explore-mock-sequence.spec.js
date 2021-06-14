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

describe('Sequence mock sample', () => {
  beforeEach(() => {
    console.log('beforeEach');
  });

  test('main context test', () => {
    console.log('main context test execution');
  });
});
