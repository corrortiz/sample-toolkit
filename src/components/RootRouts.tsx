import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllItems from './AllItems';
import ItemForm from './ItemForm';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Items</Link>
            </li>
            <li>
              <Link to="/create-item">Create Item </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create-item">
            <ItemForm />
          </Route>
          <Route path="/item/:id">
            <ItemForm />
          </Route>
          <Route path="/">
            <AllItems />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


