import React, { useContext } from 'react'
import { ThemeContext } from '../App';
type InputValue=string|number;
const Box1 = <T extends InputValue>({label,value,onchange}:{label:string,value:T,onchange:()=>void}) => {
  const {theme,toggleTheme}=useContext(ThemeContext);
  alert(theme);
  return (
    <>
    <button onClick={toggleTheme}>Onclick</button>
    <label>{label}</label>
    <input type="text" value={value} onChange={onchange}/>
    </>
  )
}

export default Box1