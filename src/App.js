import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';
import Tablet from './components/Tablet/Tablet';

function App() {
  return (
    <div className="App">
      <Device name="Uphone" price="13000" />
      <Watch></Watch>
      <Tablet></Tablet>

    </div>
  );
}

export default App;
