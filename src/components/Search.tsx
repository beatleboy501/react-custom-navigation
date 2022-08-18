import React, { useState, ChangeEvent } from 'react';
import { Input, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import '../styles/Search.css';

interface SearchProps {
  onSearch: (searchString: string) => void,
}

const Search = ({ onSearch }: SearchProps) => {
  const [name, setName] = useState<string>('');

  const handleInputChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(value);
    onSearch(value);
  };

  const handleBlur = () => setTimeout(() => setName(''), 1000);

  return (
    <div className="Search">
      <Input
        className="Search__searchBar"
        placeholder="Sitewide Search..."
        startAdornment={(
          <InputAdornment className="Search__searchBar__adornment" position="start">
            <SearchIcon className="Search__searchBar__adornment__icon" htmlColor="#6679DD" />
          </InputAdornment>
        )}
        onChange={handleInputChange}
        onBlur={handleBlur}
        value={name}
      />
    </div>
  );
};

Search.defaultProps = {
  searchItems: undefined,
};

export default Search;
