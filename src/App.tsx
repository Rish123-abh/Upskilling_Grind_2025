import { createContext ,useState} from "react";
import Box from "./Components/Box";
import Box1 from "./Components/Box1";

type ThemeType="Light"|"Dark";
interface ThemeContextType{
  theme:ThemeType;
  toggleTheme:()=>void;
}
export const ThemeContext=createContext<ThemeContextType>({theme:"Light",toggleTheme:()=>{}});

function App(){
  const [colortheme ,setcolorTheme]=useState<ThemeType>("Light");
  const toggleTheme=()=>{
        setcolorTheme((prev)=>(
          prev==="Light"?"Dark":"Light"));
  }
  return (
    <>
    <div>
      {/* <Box heading="Helloji12" count={2342} func1={(a:string)=>alert(a)}/> */}
      {/* <Box heading="Helloji12"  func1={(a:string)=>alert(a)}>
          <button>Click</button>
        </Box> */}
      <ThemeContext.Provider value={{theme:colortheme,toggleTheme}}>
      <Box1 label="Search" value={""} onchange={()=>{}}/>  
      <Box1 label="Phonenumber" value={23} onchange={()=>{}}/>  
      </ThemeContext.Provider>
    </div>
    </>
  )
}
export default App ;