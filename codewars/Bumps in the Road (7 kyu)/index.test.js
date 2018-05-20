import { bump } from './';

test('bump', () => {
  expect(bump("n")).toBe("Woohoo!");
  expect(bump("_nnnnnnn_n__n______nn__nn_nnn")).toBe("Car Dead");
});
