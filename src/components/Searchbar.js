import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-lg p-2 mr-2"
        placeholder="Search for recipes..."
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-lg">Search</button>
    </div>
  );
};

export default SearchBar;
