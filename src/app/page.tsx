'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Import the SpellcheckEditor component dynamically to avoid SSR issues with Draft.js
const SpellcheckEditor = dynamic(
  () => import('../components/SpellcheckEditor'),
  { ssr: false }
);

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-2">NIH</div>
            <div className="text-xl">Spellcheck</div>
          </div>
          <div className="flex space-x-4">
            <button 
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={() => setShowInfo(!showInfo)}
            >
              About
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to NIH Spellcheck</h1>
          <p className="text-gray-600">
            The official tool to ensure your scientific writing complies with our standards.
          </p>
        </div>

        {/* Info modal */}
        {showInfo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
              <h2 className="text-2xl font-bold mb-4">About NIH Spellcheck</h2>
              <p className="mb-4">
                This satirical web application parodies the concept of politically-motivated language policing in scientific institutions.
              </p>
              <p className="mb-4">
                <strong>Features:</strong>
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Real-time scanning for &quot;banned&quot; words</li>
                <li>Snarky tooltips with alternative suggestions</li>
                <li>TRUMP MODE - toggle to have banned words trigger angry dismissal messages</li>
              </ul>
              <p className="mb-4 text-sm italic">
                This is a satirical application and not affiliated with any government agency.
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => setShowInfo(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Editor section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Official Document Editor</h2>
          <p className="text-gray-600 mb-4">
            Type your text below. Words that violate our standards will be highlighted.
            Hover over them for suggestions. Be careful not to trigger TRUMP MODE!
          </p>
          <SpellcheckEditor />
        </div>

        {/* Instructions */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <h3 className="text-lg font-bold mb-2">How to Use</h3>
          <ul className="list-disc pl-5">
            <li>Type your text in the editor above</li>
            <li>Banned words will be underlined in red</li>
            <li>Hover over underlined words for suggestions</li>
            <li>Toggle TRUMP MODE to activate Trump&apos;s wrath</li>
            <li>When TRUMP MODE is active, any banned word will trigger an angry dismissal message!</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm mt-2">Not affiliated with any government agency</p>
        </div>
      </footer>
    </div>
  );
}
