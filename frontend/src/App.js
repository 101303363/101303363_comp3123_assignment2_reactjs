import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route, Switch, BrowserRouter} from 'react-router-dom';
import { Button} from 'react-router-dom';
import Add from './pages/Add';
import View from './pages/View';
import Update from './pages/Update';
import DetailsView from './pages/DetailsView';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<View />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update' element={<Update />} />
        <Route path='/detailsView' element={<DetailsView />} />
        <Route path='/detailsView/:id' element={<DetailsView />} />
        <Route path='/update/:id' element={<Update />} />




      </Routes>

      </BrowserRouter>

    
    </div>
  )
  

}


export default App