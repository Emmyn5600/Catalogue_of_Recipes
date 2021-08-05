import Navbar from './Navbar';
import RecipesList from '../containers/RecipesList';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipesList />
    </div>
  );
}

export default App;
