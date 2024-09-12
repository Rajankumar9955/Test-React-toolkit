import { BrowserRouter,Route,Routes, } from "react-router-dom";
import Layout from "./Layout";
import IncrementDecrement from "./IncrementDecrement";


const App=()=>{
  return(
    <>
    <BrowserRouter>
             <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route path="incdec" element={<IncrementDecrement/>}/>
                    
                    </Route>
             </Routes>
    </BrowserRouter>
    
    
    </>
  )
}
export default App;