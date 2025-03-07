import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { BannedWord } from '../data/bannedWords';

interface BannedWordSpanProps {
  children: React.ReactNode;
  bannedWord: BannedWord;
}

const BannedWordSpan: React.FC<BannedWordSpanProps> = ({ children, bannedWord }) => {
  return (
    <Tippy
      content={
        <div className="p-2">
          <div className="font-bold text-red-600 mb-1">
            {bannedWord.category} VIOLATION!
          </div>
          <div className="mb-2">{bannedWord.message}</div>
          <div className="italic">
            Suggested replacement: <span className="font-bold">{bannedWord.suggestion}</span>
          </div>
        </div>
      }
      theme="light"
      arrow={true}
      placement="top"
      interactive={true}
    >
      <span
        style={{
          textDecoration: 'underline wavy red',
          textDecorationThickness: '2px',
          cursor: 'help',
        }}
      >
        {children}
      </span>
    </Tippy>
  );
};

export default BannedWordSpan; 