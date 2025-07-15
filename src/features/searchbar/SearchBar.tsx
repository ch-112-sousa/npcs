import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
      <input
        id="search-bar-id"
        type="text"
        placeholder="Pesquise aqui..."
        value={query}
        onChange={handleInputChange}
        className='form-control form-text'        
      />
  );
};

export default SearchBar;
