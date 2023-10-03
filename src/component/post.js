import { ThemeContext } from "../context/themeContext";
import { useContext } from 'react';

function Post() {
    const {theme, changeTheme} = useContext(ThemeContext);
  return (
    <>
      <h3>My Post With {theme}</h3>
      <button onClick={changeTheme} className={`btn ${theme === "light"?"btn-dark":"btn-light"}`}>{theme === "light"? "dark":"light"}</button>
    </>
  );
}

export default Post;
