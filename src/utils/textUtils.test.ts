import { findBannedWords } from './textUtils';
import '@testing-library/jest-dom';

describe('findBannedWords', () => {
  test('should find banned words in text', () => {
    const text = 'We need more diversity and equity in science.';
    const matches = findBannedWords(text);
    
    expect(matches.length).toBe(2);
    expect(matches[0].word.word).toBe('diversity');
    expect(matches[1].word.word).toBe('equity');
  });
  
  test('should find banned words regardless of case', () => {
    const text = 'We need more DIVERSITY and Equity in science.';
    const matches = findBannedWords(text);
    
    expect(matches.length).toBe(2);
    expect(matches[0].word.word).toBe('diversity');
    expect(matches[1].word.word).toBe('equity');
  });
  
  test('should only match whole words', () => {
    const text = 'Biodiversity is not the same as diversity.';
    const matches = findBannedWords(text);
    
    expect(matches.length).toBe(1);
    expect(matches[0].word.word).toBe('diversity');
  });
  
  test('should return empty array when no banned words are found', () => {
    const text = 'This text contains no banned words.';
    const matches = findBannedWords(text);
    
    expect(matches.length).toBe(0);
  });
}); 