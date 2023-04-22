import Home from './pages/home';
import Quotes from './pages/quotes'
import Books from './pages/books';
import Inspirations from './pages/inspirations';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" exact Component={Home} />
        <Route path ="/quotes" Component={Quotes} />
        <Route path ="/books" Component={Books} />
        <Route path ="/inspirations" Component={Inspirations} />
      </Routes>
    </Router>
  );
}

export default App;
