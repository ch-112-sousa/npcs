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
    <div className='col-12'>
      <input
        type="text"
        placeholder="Pesquise aqui..."
        value={query}
        onChange={handleInputChange}
        className='form-control form-text'
        // style={{
        //   padding: '10px',
        //   width: '300px',
        //   borderRadius: '5px',
        //   border: '1px solid #ccc',
        // }}
      />
    </div>
  );
};

export default SearchBar;
