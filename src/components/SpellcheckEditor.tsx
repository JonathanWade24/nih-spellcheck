import React, { useState, useEffect } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import createBannedWordDecorator from './createBannedWordDecorator';
import { trumpModeMessages } from '../data/bannedWords';
import { findBannedWords } from '../utils/textUtils';

const SpellcheckEditor: React.FC = () => {
  // Create initial editor state with decorator
  const [editorState, setEditorState] = useState(() => 
    EditorState.createEmpty(createBannedWordDecorator())
  );
  
  // State for TRUMP MODE
  const [trumpMode, setTrumpMode] = useState(false);
  const [trumpMessage, setTrumpMessage] = useState('');
  const [trumpModeEnabled, setTrumpModeEnabled] = useState(false);
  
  // Handle editor changes
  const handleEditorChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    
    // If TRUMP MODE is enabled, check for banned words
    if (trumpModeEnabled) {
      const text = newEditorState.getCurrentContent().getPlainText();
      const bannedWordMatches = findBannedWords(text);
      
      // If any banned words are found, trigger TRUMP MODE
      if (bannedWordMatches.length > 0) {
        activateTrumpMode(bannedWordMatches[0].word.word);
      }
    }
  };
  
  // Toggle TRUMP MODE
  const toggleTrumpMode = () => {
    setTrumpModeEnabled(!trumpModeEnabled);
  };
  
  // Activate TRUMP MODE
  const activateTrumpMode = (triggeredWord: string = '') => {
    // Select a random Trump message
    const randomIndex = Math.floor(Math.random() * trumpModeMessages.length);
    let message = trumpModeMessages[randomIndex];
    
    // If a specific word triggered it, include that in the message
    if (triggeredWord) {
      message = `"${triggeredWord.toUpperCase()}"?! ${message}`;
    }
    
    setTrumpMessage(message);
    setTrumpMode(true);
    
    // Clear the editor
    const emptyState = EditorState.push(
      editorState,
      ContentState.createFromText(''),
      'remove-range'
    );
    setEditorState(emptyState);
  };
  
  // Close TRUMP MODE
  const closeTrumpMode = () => {
    setTrumpMode(false);
    setTrumpMessage('');
  };
  
  // Focus the editor when the component mounts
  useEffect(() => {
    // This is a workaround for Draft.js focus issues
    setTimeout(() => {
      const editor = document.querySelector('.DraftEditor-root');
      if (editor) {
        (editor as HTMLElement).focus();
      }
    }, 100);
  }, []);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* TRUMP MODE toggle button */}
      <div className="mb-4 flex justify-end">
        <button
          className={`px-4 py-2 rounded-md font-bold text-white ${
            trumpModeEnabled ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-700'
          }`}
          onClick={toggleTrumpMode}
        >
          {trumpModeEnabled ? 'TRUMP MODE: ON 🔥' : 'TRUMP MODE: OFF'}
        </button>
      </div>
      
      {/* Editor container */}
      <div 
        className="border-2 border-gray-300 rounded-md p-4 min-h-[300px] bg-white"
        onClick={() => {
          // Focus the editor when clicking on the container
          const editor = document.querySelector('.DraftEditor-root');
          if (editor) {
            (editor as HTMLElement).focus();
          }
        }}
      >
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          placeholder={trumpModeEnabled 
            ? "Type at your own risk... TRUMP is watching for banned words! 👀" 
            : "Type your text here. Be careful what you say..."
          }
          spellCheck={true}
        />
      </div>
      
      {/* TRUMP MODE status indicator */}
      {trumpModeEnabled && (
        <div className="mt-2 text-red-600 text-sm font-bold animate-pulse">
          ⚠️ TRUMP MODE ACTIVE: Any banned word will trigger Trump&apos;s wrath! ⚠️
        </div>
      )}
      
      {/* TRUMP MODE Modal */}
      {trumpMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-3xl font-bold text-red-600 mb-4">TRUMP MODE ACTIVATED!</h2>
            <p className="text-xl mb-6">{trumpMessage}</p>
            <div className="flex justify-end">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={closeTrumpMode}
              >
                OK, I&apos;ll Be Good
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpellcheckEditor; 