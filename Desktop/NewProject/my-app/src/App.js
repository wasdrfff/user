import logo from './logo.svg';
import './App.css';
import { FirstBlock } from './Components/FirstBlock/FirstBlock';
import { SecondBlock } from './Components/SecondBlock/SecondBlock';
function App() {
  return (
    <div className="App">
      <FirstBlock />
      <SecondBlock />
    </div>
  );
}

export default App;
