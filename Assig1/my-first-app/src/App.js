import logo from './logo.svg';
import './App.css';
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component/component3';
import Component4 from './component/component4';
import Component5 from './component/component5';
import Component6 from './component/component6';
import {Component3_1 , Component3_2} from './component/component3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Class</h1>
        <Component1 text={"this text is props"}/>
        <Component2 text2={"I am props of component2"}/>
        <Component3/>
        <Component3_1/>
        <Component3_2/>
        <Component4/>
        <Component5/>
        <Component6/>
        
        </header> 

      
    </div>
  );
}

export default App;
