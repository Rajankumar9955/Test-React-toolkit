import { BrowserRouter,Route,Routes, } from "react-router-dom";
import Layout from "./Layout";
import IncrementDecrement from "./IncrementDecrement";
import ColorChange from "./ColorChange";


const App=()=>{
  return(
    <>
    <BrowserRouter>
             <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route path="incdec" element={<IncrementDecrement/>}/>
                    <Route path="colorchange" element={<ColorChange/>}/>
                    
                    </Route>
             </Routes>
    </BrowserRouter>
    
    
    </>
  )
}
export default App;