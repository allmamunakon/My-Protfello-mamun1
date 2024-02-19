import React from 'react';
import './App.css';
  import {  Routes , Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contruct from './Components/Contruct/Contruct';
import Nopage from './Components/Nopage/Nopage';
import Navbar from './Components/Navbar/Navbar';



import Games from './Components/Services/ServiceItems/Games';
import Research from './Components/Services/ServiceItems/Research';
import StudentInformation from './Components/Services/ServiceItems/StudentInformation';
import Featured from './Components/Services/ServiceItems/Featured';




function App() {
  return (
    <div className="App">
<Navbar className='' />
      
    
    <Routes> 
           <Route path="/" element={<Home />}/>
      
          <Route path="About" className='' element={<About />}/>
                 
          <Route path="/Services/*" element={<Services />} > 
         
          <Route path="Games" element={<Games />}/>
          <Route path="Research" element={<Research />} />
          <Route path="StudentInformation" element={<StudentInformation />} /> 
          <Route path="Featured" element={<Featured />} /> 
          </Route>

          <Route path="Contruct" element={<Contruct />} /> 
          <Route path="*" element={<Nopage />} />
       </Routes> 
   
   
     
    
       

    </div>
  );
}

export default App;
