export const convertText = text =>
  text
    .replace(/⠀/g, '')
    .replace(/\s*\n{2,}/g, '\n⠀\n')
    .replace(/\s+\n/g, '\n');
