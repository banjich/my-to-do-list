import './App.css';
import List from './components/List';
import icon from '../src/assets/to-do-list-icon.png';

function App() {
  const toDoListIcon = icon;
  return (
    <div className='App'>
      <div className='header'>
        <h1>My To Do List</h1>
        <img src={toDoListIcon} width='60px'></img>
      </div>
      <List />
    </div>
  );
}

export default App;
