
import './App.css';
import { FirstBlock } from './Components/FirstBlock/FirstBlock';
import { SecondBlock } from './Components/SecondBlock/SecondBlock';
import {ThirdBlock} from './Components/ThirdBlock/ThirdBlockContent';
import {FourthBlock} from './Components/FourthBlock/FourthBlock';
import {FifthBlock} from './Components/FifthBlock/FifthBlock';
function App() {
  return (
    <div className="App">
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
    </div>
  );
}

export default App;
