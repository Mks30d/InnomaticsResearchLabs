import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllJobs from './components/AllJobs';
import JobPage from './components/JobPage';
import Navbar from './components/Navbar';
import CreateJob from './components/CreateJob';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<AllJobs />} />
        <Route path='/createjob' element={<CreateJob />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      {/* <JobPage /> */}

    </div>
  );
}

export default App;
