
import './App.css';
import { FirstBlock } from './Components/FirstBlock/FirstBlock';
import { SecondBlock } from './Components/SecondBlock/SecondBlock';
import {ThirdBlock} from './Components/ThirdBlock/ThirdBlockContent';
function App() {
  return (
    <div className="App">
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
    </div>
  );
}

export default App;
