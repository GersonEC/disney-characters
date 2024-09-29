import { useEffect, useReducer } from 'react';

export interface User {
  firstName: string;
  lastName: string;
  birthDate: Date;
  city: string;
  state: string;
  favoriteCharacter: string;
  favoriteMovie: string;
  favoriteLocation: string;
}

const initialUser: User = {
  firstName: '',
  lastName: '',
  birthDate: new Date(),
  city: '',
  state: '',
  favoriteCharacter: '',
  favoriteMovie: '',
  favoriteLocation: '',
};

type UserAction =
  | {
      type: 'update_user';
      payload: User;
    }
  | {
      type: 'reset_user';
    };

function reducerfn(state: User, action: UserAction) {
  if (action.type === 'update_user') {
    sessionStorage.setItem('user-information', JSON.stringify(action.payload));
    const newState = { ...action.payload };
    return newState;
  }
  if (action.type === 'reset_user') {
    sessionStorage.removeItem('user-information');
    const newState = { ...initialUser };
    return newState;
  }
  throw Error('Unknown action.');
}

export const useUser = () => {
  const [state, dispatch] = useReducer(reducerfn, initialUser);

  useEffect(() => {
    const user = sessionStorage.getItem('user-information');
    if (user) {
      dispatch({
        type: 'update_user',
        payload: JSON.parse(user),
      });
    }
  }, []);

  const updateUser = (user: User) => {
    dispatch({
      type: 'update_user',
      payload: user,
    });
  };

  const resetUser = () => {
    dispatch({
      type: 'reset_user',
    });
  };

  return {
    state,
    updateUser,
    resetUser,
  };
};
