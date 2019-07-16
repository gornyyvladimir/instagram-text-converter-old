import { convertText } from './helpers';

test('convertText work correctly with \\n\\n characters', () => {
  const initialText = 'Hello this is my first post\n\nhashtags: #app #react #fe';
  const expectedResult = 'Hello this is my first post\n⠀\nhashtags: #app #react #fe'
  const result = convertText(initialText);
  expect(result).toBe(expectedResult);
});

test('convertText do not convert text without \\n\\n characters', () => {
  const initialText = 'Hello this is my first post';
  const expectedResult = 'Hello this is my first post'
  const result = convertText(initialText);
  expect(result).toBe(expectedResult);
});

test('convertText remove all special characters before convert', () => {
  const initialText = 'Hello this is my first post⠀<- here is special character';
  const expectedResult = 'Hello this is my first post<- here is special character'
  const result = convertText(initialText);
  expect(result).toBe(expectedResult);
});

test('convertText remove all trailing spaces', () => {
  const initialText = 'Hello this is my first post    \n';
  const expectedResult = 'Hello this is my first post\n'
  const result = convertText(initialText);
  expect(result).toBe(expectedResult);
});
