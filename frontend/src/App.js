// import React,{useState} from 'react';
import React from 'react';

import  './global.css'
import Routes from './routes';


function App() {
  //use state array, segundo valor muda o estado
  // const [counter,setCounter] =useState(0);
  
  // function increment(){
  //   // counter+=1;
  //   setCounter(counter +1)
  //   //console.log(counter);
  // }
  return (
    //<Header title="Semana OmniStack"/>
    // <div>
    //   <Header>
    //     Contador:{counter}
    //   </Header>
    //   <button onClick={increment}>Incrimentar</button>
    // </div>
    <Routes />
  );
}

export default App;
