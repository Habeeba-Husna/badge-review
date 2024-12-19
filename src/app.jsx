import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Data from './Components/Data'
import { DataProvider } from './Components/Context'
import Details from './Components/Details';

function App() {

  return (

    <DataProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Data />} />
            <Route path="/post/:id" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
    // <DataProvider>
    // <div>
      
    //   <Data/>
    // </div>
    // </DataProvider>
  );
}

export default App


