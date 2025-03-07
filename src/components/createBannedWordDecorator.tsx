import { CompositeDecorator, ContentBlock } from 'draft-js';
import BannedWordSpan from './BannedWordSpan';
import { findBannedWords } from '../utils/textUtils';

// Strategy function to find banned words
const bannedWordStrategy = (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void
) => {
  const text = contentBlock.getText();
  const matches = findBannedWords(text);
  
  matches.forEach(match => {
    callback(match.startOffset, match.endOffset);
  });
};

// Component function to render banned words
const bannedWordComponent = (props: {
  decoratedText: string;
  children: React.ReactNode;
}) => {
  const text = props.decoratedText;
  
  // Find the banned word that matches this text
  const matches = findBannedWords(text);
  if (matches.length === 0) return <span>{props.children}</span>;
  
  // Use the first match (there should only be one for this specific text)
  const bannedWord = matches[0].word;
  
  return (
    <BannedWordSpan bannedWord={bannedWord}>
      {props.children}
    </BannedWordSpan>
  );
};

// Create the decorator
const createBannedWordDecorator = () => {
  return new CompositeDecorator([
    {
      strategy: bannedWordStrategy,
      component: bannedWordComponent,
    },
  ]);
};

export default createBannedWordDecorator; 