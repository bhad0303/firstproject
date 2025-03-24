
import Home from './Component/Home';
import Teacher from './Component/Teacher';
import Holiday from './Component/Holiday';
import NotFound from "./Component/NotFound";
import Contact from './Component/Contact';
import TalkToUs from './Component/TalkToUs'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';

function App(){
     return(
        <div>
            <BrowserRouter>
              <Routes>
                   <Route path='/' element={<Home/>}/>
                   <Route path='/teachers' element={<Teacher/>}/>
                   <Route path='/holidays' element={<Holiday/>}/>
                   <Route path='/contact' element={<Contact/>}/>
                   <Route path='/talk-to-us' element={<TalkToUs/>}/>  
                   <Route path='*' element={<NotFound/>}/>
              </Routes>
            </BrowserRouter>

        </div>
     )
}


export default App;