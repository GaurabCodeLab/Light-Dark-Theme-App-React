import {createContext } from 'react';

const themes = {
    light : "light",
    dark : "dark"
}

const ThemeContext = createContext();

export {themes, ThemeContext};
