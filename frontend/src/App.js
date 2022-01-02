import './App.css';
import Login from "./component/login/Login";
import Layout from "./component/common/Layout";
import {BrowserRouter, HashRouter} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Login/>
    //   </header>
    // </div>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
  );
}

export default App;
