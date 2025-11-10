import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm p-4 border-b border-gray-200 z-20">
      <div className="container mx-auto flex items-center">
        <i className="fas fa-book text-2xl text-blue-600 mr-3"></i>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Dicionário Eletrônico de Terminologia em Ciência da Informação (DeltCI)
        </h1>
      </div>
    </header>
  );
};

export default Header;