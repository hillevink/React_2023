import {Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Resources from './components/Resources';
import './css/main.css';
import resources from './resources/ressurser';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path=':slug' element={<Resources resources={resources} />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
