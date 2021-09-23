
import './App.css';
import Joke from './Joke';
import jokeData from './JokeData';
function App() {
  const jokeComponents = jokeData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)
    return (
      jokeComponents
    )
}
export default App
