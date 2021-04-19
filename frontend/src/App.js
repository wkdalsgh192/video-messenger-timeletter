import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { MainPage, NotFound } from './pages';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact={true} component={MainPage} />
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
