import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

const INITIAL_STATE = {
  darkMode: false,
};
export const darkModeContext = createContext(INITIAL_STATE);

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  return (
    <darkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </darkModeContext.Provider>
  );
};
