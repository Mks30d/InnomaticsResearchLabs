import './App.css';
import AllNotes from './Components/AllNotes';
import NotesFrom from './Components/NotesFrom';
import "./Components/AllNotes.css";
// import "./Components/NotesFrom.css"

function App() {
  return (
    <div id='app_main_div'>
      <NotesFrom />
      <div id='app_allnotes_div'>
        <AllNotes />
      </div>
    </div>
  );
}

export default App;
