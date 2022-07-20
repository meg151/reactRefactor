import Navbar from 'components/Navbar/Navbar';
import Home from 'screens/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from 'components/Create/Create';
import BlogDetails from 'components/BlogDetails/BlogDetails';
import NotFound from 'components/Error/NotFound';
import GlobalStyles from 'components/styles/Global.styled';
import { Preview } from 'components/styles/Preview.styled';
import { Detail } from 'components/styles/Detail.styled';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
              <Preview />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
              <Detail />
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
