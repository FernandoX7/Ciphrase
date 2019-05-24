import { TruncateTextPipe } from './truncate-text.pipe';

describe('truncateText', () => {
  let pipe: TruncateTextPipe;

  beforeEach(() => pipe = new TruncateTextPipe());

  test('adds ellipsis if the text is longer than the length limit', () => {
    const textToTruncate = 'Fernando Ramirez';
    const lengthLimit = 4;
    expect(pipe.transform(textToTruncate, lengthLimit)).toBe('Fern...');
  });

  test('shows full text if the text length is less than the length limit', () => {
    const textToTruncate = 'Fernando';
    const lengthLimit = 20;
    expect(pipe.transform(textToTruncate, lengthLimit)).toBe('Fernando');
  });
});
