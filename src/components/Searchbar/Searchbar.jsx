import { useState } from 'react';
import './Searchbar.css';
import { toast } from 'react-hot-toast';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase().trim() );
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query === '') {
      toast.error('Enter what you want to find please');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit} autoComplete="off">
          <button type="submit" className="SearchForm-button"></button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={query}
          />
        </form>
      </header>
    );
  }

