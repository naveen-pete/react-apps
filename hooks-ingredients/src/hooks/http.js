import { useReducer } from 'react';

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

const useHttp = () => {
  const [httpState, httpDispatch] = useReducer(httpReducer, {
    showLoader: false,
    error: null
  });
};

export default useHttp;