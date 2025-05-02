import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from '../pages/home';
import Contact from '../pages/contact';
import Shop from '../pages/Shop';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  
  );
};

export default App;





















// import React from 'react'
// import SuperCounter from './combine'

// function App() {
//   return (
//     <div>
//       <SuperCounter />
//     </div>
//   )
// }

// export default App