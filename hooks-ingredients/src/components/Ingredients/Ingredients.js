import React, { useReducer, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import Logout from '../Logout';


import ingredientService from '../../services/IngredientService';

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL':
      return action.payload;

    case 'CREATE':
      return [...state, action.payload];

    case 'DELETE':
      return state.filter(i => i.id !== action.payload);

    default:
      return state;
  }
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST':
      return { showLoader: true, error: null };

    case 'ERROR':
      return { showLoader: false, error: action.payload };

    case 'RESPONSE':
    case 'CLEAR':
      return { showLoader: false, error: null };

    default:
      return state;
  }
};

function Ingredients() {
  const [ingredients, ingredientDispatch] = useReducer(ingredientReducer, []);
  const [httpState, httpDispatch] = useReducer(httpReducer, { showLoader: false, error: null });
  // const [showLoader, setShowLoader] = useState(false);
  // const [error, setError] = useState();

  const handleSearchIngredients = useCallback(
    filteredIngredients => ingredientDispatch({
      type: 'GET_ALL',
      payload: filteredIngredients
    }),
    []
  );

  const handleError = useCallback(
    error => {
      // setError(error);
      httpDispatch({ type: 'ERROR', payload: error });
    },
    []
  );

  const handleAddIngredient = useCallback(
    async ingredient => {
      // setShowLoader(true);
      httpDispatch({ type: 'REQUEST' });

      try {
        const responseData = await ingredientService.create(ingredient);
        ingredient.id = responseData.name;

        ingredientDispatch({
          type: 'CREATE',
          payload: ingredient
        });

        // setShowLoader(false);
        httpDispatch({ type: 'RESPONSE' });
      } catch (e) {
        // setShowLoader(false);
        // setError('Create ingredient failed.');
        httpDispatch({ type: 'ERROR', payload: 'Create ingredient failed.' });
        console.log('Error:', e);
      }
    },
    []
  );

  const handleRemoveIngredient = useCallback(
    async id => {
      // setShowLoader(true);
      httpDispatch({ type: 'REQUEST' });

      try {
        await ingredientService.delete(id);

        ingredientDispatch({
          type: 'DELETE',
          payload: id
        });

        // setShowLoader(false);
        httpDispatch({ type: 'RESPONSE' });
      } catch (e) {
        // setShowLoader(false);
        // setError('Delete ingredient failed.');
        httpDispatch({ type: 'ERROR', payload: 'Delete ingredient failed.' });
        console.log('Error:', e);
      }
    },
    []
  );

  const ingredientList = useMemo(() => {
    return <IngredientList
      ingredients={ingredients}
      onRemoveItem={handleRemoveIngredient}
    />;
  }, [ingredients, handleRemoveIngredient]);

  const handleClose = useCallback(
    () => httpDispatch({ type: 'CLEAR' }),
    []
  );

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={handleClose}>{httpState.error}</ErrorModal>}
      <Logout />

      <IngredientForm
        onAddIngredient={handleAddIngredient}
        showLoader={httpState.showLoader}
      />

      <section>
        <Search
          onSearchIngredients={handleSearchIngredients}
          onError={handleError}
        />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
