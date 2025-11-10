
import React, { useState, useMemo } from 'react';
import { dictionaryData } from './data/dictionaryData.ts';
import { DictionaryEntry } from './types.ts';
import Header from './components/Header.tsx';
import SearchBar from './components/SearchBar.tsx';
import TermList from './components/TermList.tsx';
import EntryDetail from './components/EntryDetail.tsx';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(dictionaryData[0] || null);
  const [isListVisible, setIsListVisible] = useState(true);

  const filteredEntries = useMemo(() => 
    dictionaryData.filter(entry =>
      entry.term.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  const handleSelectEntry = (entry: DictionaryEntry) => {
    setSelectedEntry(entry);
    if (window.innerWidth < 768) { // md breakpoint in Tailwind
      setIsListVisible(false);
    }
  };

  const handleBackToList = () => {
    setIsListVisible(true);
    setSelectedEntry(null);
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-50">
      <Header />
      <main className="flex-1 flex overflow-hidden">
        <div className={`flex w-full md:w-1/3 lg:w-1/4 flex-col border-r border-gray-200 bg-white transition-transform transform ${isListVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative absolute h-full z-10`}>
          <SearchBar value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <TermList
            entries={filteredEntries}
            selectedTerm={selectedEntry?.term}
            onSelectEntry={handleSelectEntry}
          />
        </div>
        <div className={`flex-1 flex flex-col overflow-y-auto w-full md:w-2/3 lg:w-3/4 transition-opacity ${!isListVisible || window.innerWidth >= 768 ? 'opacity-100' : 'opacity-0'}`}>
          <EntryDetail entry={selectedEntry} onBack={handleBackToList} />
        </div>
      </main>
    </div>
  );
};

export default App;