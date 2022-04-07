import mb_strimwidth from '../src/mb_strimwidth';

// Check if the result is the same as PHP version.
// Results in PHP 7.3.28 are used.
// see https://www.php.net/manual/en/function.mb-strimwidth.php
describe('mb_strimwidth test', (): void => {

  // The result depends on the number of arguments

  // Check the case of three arguments
  test('no trim_marker', (): void => {
    expect(mb_strimwidth('ABCDEFG', 0, 2)).toBe('AB');

    expect(mb_strimwidth('1234567890', 0, 5)).toBe('12345');
    expect(mb_strimwidth('1234567890', 0, 5)).toBe('12345');
    expect(mb_strimwidth('1234567890', 2, 5)).toBe('34567');
    expect(mb_strimwidth('1234567890', 0, 9)).toBe('123456789');
    expect(mb_strimwidth('1234567890', 0, 10)).toBe('1234567890');
    expect(mb_strimwidth('1234567890', 0, 11)).toBe('1234567890');
    expect(mb_strimwidth('1234567890', 5, 20)).toBe('67890');

    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 6)).toBe('𩸽定食');
    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 7)).toBe('𩸽定食');
    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 8)).toBe('𩸽定食が');

    expect(mb_strimwidth('1234567890', 0, 0)).toBe('');
  });

  // Check the case of four arguments
  test('use trim_marker', (): void => {
    expect(mb_strimwidth('1234567890', 0, 5, '')).toBe('12345');
    expect(mb_strimwidth('1234567890', 1, 5, '')).toBe('23456');
    expect(mb_strimwidth('1234567890', 0, 0, '')).toBe('');

    expect(mb_strimwidth('1234567890', 0, 5, '...')).toBe('12...');
    expect(mb_strimwidth('1234567890', 0, 5, '…')).toBe('1234…');

    expect(mb_strimwidth('1234567890', 0, 0, '...')).toBe('1234567890');
    expect(mb_strimwidth('1234567890', 1, 0, '...')).toBe('234567890');
    expect(mb_strimwidth('1234567890', 0, 1, '...')).toBe('1234567890');
    expect(mb_strimwidth('1234567890', 1, 1, '...')).toBe('234567890');
    expect(mb_strimwidth('1234567890', 0, 2, '...')).toBe('1234567890');
    expect(mb_strimwidth('1234567890', 0, 3, '...')).toBe('...');
    expect(mb_strimwidth('1234567890', 0, 4, '...')).toBe('1...');
    expect(mb_strimwidth('1234567890', 1, 4, '...')).toBe('2...');

    expect(mb_strimwidth('1234567890', 0, 2, '...')).toBe('1234567890');

    expect(mb_strimwidth('1234567890', 0, 9, '...')).toBe('123456...');
    expect(mb_strimwidth('1234567890', 0, 10, '...')).toBe('1234567890');
    expect(mb_strimwidth('1234567890', 0, 11, '...')).toBe('1234567890');

    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 7, '...')).toBe('𩸽定...');
    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 8, '...')).toBe('𩸽定...');
    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 9, '...')).toBe('𩸽定食...');
    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 14, '...')).toBe('𩸽定食が食...');
    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 15, '...')).toBe('𩸽定食が食べ...');
    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 16, '...')).toBe('𩸽定食が食べ...');
    expect(mb_strimwidth('𩸽定食が食べたい😆', 0, 17, '...')).toBe('𩸽定食が食べたい😆');
    
    expect(mb_strimwidth('👩‍👩‍👧😆😷🧝‍♂️🫄✋✊😱😓', 0, 14, '💔')).toBe('👩‍👩‍👧😆😷🧝‍♂️🫄✋💔');
    expect(mb_strimwidth('👩‍👩‍👧😆😷🧝‍♂️🫄✋✊😱😓', 0, 15, '💔')).toBe('👩‍👩‍👧😆😷🧝‍♂️🫄✋✊💔');
    expect(mb_strimwidth('👩‍👩‍👧😆😷🧝‍♂️🫄✋✊😱😓', 0, 16, '💔')).toBe('👩‍👩‍👧😆😷🧝‍♂️🫄✋✊😱😓');
  });
});