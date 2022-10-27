import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import New from './component/New/New';
import List from './component/List/List';
import Single from './component/Single/Single';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='users'>
             <Route index element={<List/>}/>
             <Route path=':userId' element={<Single/>}/>
             <Route path='new' element={<New/>}/>
            </Route>
            <Route path='products'>
             <Route index element={<List/>}/>
             <Route path=':productId' element={<Single/>}/>
             <Route path='new' element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
