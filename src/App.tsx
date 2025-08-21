import './App.css';
import { CreatorPage } from './components/CreatorPage';
import { Route, Routes } from 'react-router-dom';
import { FormPage } from './components/FormPage';
import { Layout } from './components/Layout';
import { ResponseListPage } from './components/ResponseListPage';
function App() {
  return (
    <>
      <div className="page">
        <Routes>
          <Route path='/' Component={Layout}>
            <Route path='/creator' Component={CreatorPage} />
            <Route path='/checklist' Component={FormPage} />
            <Route path='/responses' Component={ResponseListPage} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
