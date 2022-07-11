import Navbar from 'components/Navbar/Navbar';
import Home from '/screens/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from 'components/Create/Create';
import BlogDetails from 'components/BlogDetails/BlogDetails';
import NotFound from 'components/Error/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
