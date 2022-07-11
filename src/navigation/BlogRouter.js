import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../screens/Home';
import Create from '../components/Create';
import BlogDetails from './BlogsDetails';
import NotFound from '../components/NotFound';

const BlogRouter = () => {
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
};

export default BlogRouter;
