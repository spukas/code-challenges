import { toCamelCase } from './';

test('toCamelCase returns empty string when empty string is passed', () => {
  expect(toCamelCase('')).toBe('');
});

test('toCamelCase returns correct value for "the_stealth_warrior"', () => {
  expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior');
});

test('toCamelCase returns correct value for "The-Stealth-Warrior"', () => {
  expect(toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior');
});

test('toCamelCase returns correct value for "A-B-C"', () => {
  expect(toCamelCase('A-B-C')).toBe('ABC');
});
