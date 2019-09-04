import React from 'react';

// import Homepage from './pages/homepage/Homepage';
import cubeHtml from 'pages/testSence/cube';

function App() {
  // return <Homepage />;
  return <div dangerouslySetInnerHTML={{ __html: cubeHtml }} />;
}

export default App;
