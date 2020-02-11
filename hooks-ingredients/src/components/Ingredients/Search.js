import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

import ingredientService from '../../services/IngredientService';

const Search = React.memo(props => {
  const [searchText, setSearchText] = useState('');
  const { onSearchIngredients, onError } = props;
  const searchRef = useRef();

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const responseData = searchText.length > 0
          ? await ingredientService.search(searchText)
          : await ingredientService.getAll();

        const ingredients = Object.keys(responseData).map(key => ({
          id: key,
          ...responseData[key]
        }));

        onSearchIngredients(ingredients);
      } catch (e) {
        onError('Get/Search ingredients failed.');
        console.log('Error:', e);
      }
    };

    const timer = setTimeout(() => {
      if (searchText === searchRef.current.value) {
        fetchIngredients();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText, onSearchIngredients, onError]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={searchText}
            ref={searchRef}
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
