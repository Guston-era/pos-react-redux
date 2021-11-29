import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/layout/SideBar";
import Header from "./components/layout/Header";
import Reports from "./components/items/Reports";
import Settings from "./components/items/Settings";
import Dashboard from "./components/items/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flexed-content">
        <SideBar />
        <Routes>
          <Route
            exact
            path="/dashboard"
            name="Dashboard"
            element={<Dashboard />}
          />
          <Route
            exact
            path="/settings"
            name="Settings"
            element={<Settings />}
          />
          <Route exact path="/reports" name="Reports" element={<Reports />} />
          {/* <Route>
            <Dashboard />
          </Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
