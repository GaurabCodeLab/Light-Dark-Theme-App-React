import Post from "./component/post";
import { themes, ThemeContext } from "./context/themeContext";
import { useState, useEffect} from 'react';

function App(){
  const [theme, setTheme] = useState(themes.light);
  console.log(theme);
  const body = document.body;
  useEffect(()=>{
    if(theme === "light"){
     body.style.backgroundColor = "white";
     body.style.color = "black";
    } else{
      body.style.backgroundColor = "black";
      body.style.color = "white";
    }
  })

  function changeTheme(){
    theme === "light"? setTheme(themes.dark):setTheme(themes.light);
  }

  return(
    <>
    <div className="container">
    <h1>Light Dark Theme App</h1>
    <ThemeContext.Provider value={{theme, changeTheme}}>
    <Post/>
    </ThemeContext.Provider>
    </div>
    </>
  )
}

export default App;

