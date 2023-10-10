import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
const ToggleSwitch = ({ label }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    console.log("Butoon clicked");
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <div className="container" >
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label}  />
        <label className="label" htmlFor={label} onChange={toggleTheme}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
    </ThemeProvider>
  );
};
  
export default ToggleSwitch;