import {Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Main from './components/Main';
import './css/main.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
