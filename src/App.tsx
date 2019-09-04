import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ARPage from './pages/arpage/ARPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/ar" component={ARPage} />
    </Router>
  );
}

export default App;
