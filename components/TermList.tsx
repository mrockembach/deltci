
import React from 'react';
import { DictionaryEntry } from '../types.ts';

interface TermListProps {
  entries: DictionaryEntry[];
  selectedTerm: string | undefined;
  onSelectEntry: (entry: DictionaryEntry) => void;
}

const TermList: React.FC<TermListProps> = ({ entries, selectedTerm, onSelectEntry }) => {
  return (
    <nav className="flex-1 overflow-y-auto">
      <ul>
        {entries.map(entry => (
          <li key={entry.term}>
            <button
              onClick={() => onSelectEntry(entry)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                selectedTerm === entry.term
                  ? 'bg-blue-50 text-blue-700 font-semibold border-r-4 border-blue-500'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {entry.term}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TermList;