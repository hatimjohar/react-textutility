import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Table from './Components/Table';
import Alert from './Components/Alert';
import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [alertObj, setAlert] = useState(null);

  const showAlert = (type, message) => {
    let alert = {
      type: type,
      message: message
    }
    setAlert(alert);

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  return (
    <>
      <Router>
        <div>
          <Navbar Title="TextUtils" />
          <Alert alert={alertObj} />
          <Switch>
            <Route exact path="/table">
              <div className='container my-3'>
                <Table />
              </div>
            </Route>

            <Route exact path="/">

              <div className='container my-3'>
                <TextForm alert={showAlert}></TextForm>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
