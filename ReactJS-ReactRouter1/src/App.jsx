import { BrowserRouter } from 'react-router-dom';
import MainRouters from './pages/Routers';
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
    <MainRouters/>
    </BrowserRouter>
  )
}

export default App;
