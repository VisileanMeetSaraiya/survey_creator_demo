import './App.css';
import { CreatorPage } from './components/CreatorPage';
import SurveyCreatorRenderComponent from './components/CreatorPage2';
import { Route, Routes } from 'react-router-dom';
import { FormPage } from './components/FormPage';
function App() {
  return (
    <>
      <Routes>
          <Route path='/creator' Component={CreatorPage} />
          <Route path='/checklist' Component={FormPage} />
      </Routes>
    </>
  )
}

export default App
