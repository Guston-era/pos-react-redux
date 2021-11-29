import "./css/App.css";
import SideBar from "./components/layout/SideBar";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flexed-content">
        <SideBar />
        {/* <Switch>
                <Route
                  exact
                  path="/dashboard"
                  name="Dashboard"
                  render={(props) => <Login {...props} />}
                />
                <Route
                  exact
                  path="/settings"
                  name="Settings"
                  render={(props) => <Forgot {...props} />}
                />
                <Route
                  exact
                  path="/reports"
                  name="Reports"
                  render={(props) => <Forgot {...props} />}
                />
                <Route>
                  <dashboard />
                </Route>
              </Switch> */}
      </div>
    </div>
  );
}

export default App;
