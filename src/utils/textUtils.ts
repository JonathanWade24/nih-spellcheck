import { BannedWord, bannedWords } from '../data/bannedWords';
import { ContentState } from 'draft-js';

export interface BannedWordMatch {
  word: BannedWord;
  startOffset: number;
  endOffset: number;
}

/**
 * Find all banned words in a given text
 */
export const findBannedWords = (text: string): BannedWordMatch[] => {
  const matches: BannedWordMatch[] = [];
  const lowerText = text.toLowerCase();

  bannedWords.forEach(bannedWord => {
    const wordLower = bannedWord.word.toLowerCase();
    let startIndex = 0;
    let index;

    // Find all instances of the banned word
    while ((index = lowerText.indexOf(wordLower, startIndex)) !== -1) {
      // Check if it's a whole word (not part of another word)
      const prevChar = index > 0 ? lowerText[index - 1] : ' ';
      const nextChar = index + wordLower.length < lowerText.length ? lowerText[index + wordLower.length] : ' ';
      
      if (!/[a-zA-Z0-9]/.test(prevChar) && !/[a-zA-Z0-9]/.test(nextChar)) {
        matches.push({
          word: bannedWord,
          startOffset: index,
          endOffset: index + wordLower.length
        });
      }
      
      startIndex = index + wordLower.length;
    }
  });

  // Sort matches by start offset
  return matches.sort((a, b) => a.startOffset - b.startOffset);
};

/**
 * Get all banned words from a Draft.js ContentState
 */
export const getBannedWordsFromContentState = (contentState: ContentState): BannedWordMatch[] => {
  const text = contentState.getPlainText();
  return findBannedWords(text);
}; 