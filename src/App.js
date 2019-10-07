import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/components/styles.scss";

const ExpenseDashboardPage = () => <div>This is from my dashboard component</div>;

const AddExpensePage = () => <div>This is from my add expense component</div>;

const EditExpensePage = () => <div>This is from my edit expense component</div>;

const HelpPage = () => <div>This is from my help component</div>;

const NotFoundPage = () => <div>404!</div>;

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/">Dashboard</Link>
    <Link to="/create">Create Expense</Link>
    <Link to="/edit">Edit Expense</Link>
    <Link to="/help">Help</Link>
  </header>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
