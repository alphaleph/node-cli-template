import tap from 'tap';

const testArray = ['a', 'b', 'c'];

tap.test('Test samples are working', async t => {
  t.equal(testArray[0], 'a', 'equal() is working correctly.');

  t.same(testArray, ['a', 'b', 'c'], 'same() is working correctly.');

  t.assert(testArray[0] === 'a', 'assert() is working correctly.');
});
