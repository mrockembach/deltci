
import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="p-4 border-b border-gray-200 sticky top-0 bg-white">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <i className="fas fa-search text-gray-400"></i>
        </span>
        <input
          type="text"
          placeholder="Buscar verbete..."
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
    </div>
  );
};

export default SearchBar;
