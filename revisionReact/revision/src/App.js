import logo from './logo.svg';
import './App.css';
import { Clock } from './components/Clock';
import { Toggle } from './components/Toggle';
import { LoginControl } from './components/LoginControl';
import { Calculator } from './components/Calculator';
import { HuseRef } from './components/HuseRef';
import { ThemeChange } from './components/ThemeChange';
import { HuseReducer } from './components/HuseReducer/HuseReducer';

function App() {
  return (
    <div className="App">
      {/* <Clock/>
      <hr/>
      <Toggle/>
      <hr/>
      <LoginControl/>
      <hr/>
      <Calculator/> */}
      {/* <HuseRef/> */}
      {/* <ThemeChange/> */}
      <HuseReducer/>
    </div>
  );
}

export default App;
