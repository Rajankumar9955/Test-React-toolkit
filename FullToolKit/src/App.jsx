import { BrowserRouter,Route,Routes, } from "react-router-dom";
import Layout from "./Layout";
import IncrementDecrement from "./IncrementDecrement";
import ColorChange from "./ColorChange";
import ToDoApp from "./ToDoApp";

const App=()=>{
  return(
    <>
    <BrowserRouter>
             <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route path="incdec" element={<IncrementDecrement/>}/>
                    <Route path="colorchange" element={<ColorChange/>}/>
                    <Route path="todoapp" element={<ToDoApp/>}/>
                    
                    </Route>
             </Routes>
    </BrowserRouter>
    
    
    </>
  )
}
export default App;