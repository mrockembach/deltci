
import React from 'react';
import { DictionaryEntry } from '../types.ts';

interface EntryDetailProps {
  entry: DictionaryEntry | null;
  onBack: () => void;
}

const EntryDetail: React.FC<EntryDetailProps> = ({ entry, onBack }) => {
  if (!entry) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 p-8">
        <div className="text-center">
            <i className="fas fa-book-open text-4xl mb-4 text-gray-300"></i>
            <p>Selecione um verbete na lista para ver os detalhes.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 lg:p-12">
      <button onClick={onBack} className="md:hidden mb-4 text-blue-600 hover:underline flex items-center">
        <i className="fas fa-arrow-left mr-2"></i>
        Voltar à lista
      </button>
      <article className="prose lg:prose-lg max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 border-b pb-4 mb-6">{entry.term}</h1>
        
        <div className="text-gray-800 leading-relaxed text-justify space-y-4">
            {entry.definition}
        </div>

        {entry.seeAlso && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Ver também</h2>
            <div className="text-blue-600">{entry.seeAlso}</div>
          </div>
        )}

        {entry.references && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Referências</h2>
            <div className="text-sm text-gray-600 space-y-3 leading-snug">{entry.references}</div>
          </div>
        )}
      </article>
    </div>
  );
};

export default EntryDetail;