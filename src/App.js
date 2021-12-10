import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Reports from "./screens/Reports";
import Settings from "./screens/Settings";
import Dashboard from "./screens/Dashboard";
import { Provider } from "react-redux";
import { store } from "./redux_setup/store";
import Payment from "./screens/Payment";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route exact path="/" name="Dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/dashboard"
            name="Dashboard"
            element={<Dashboard />}
          />
          <Route exact path="/payment" name="Payment" element={<Payment />} />
          <Route path="/settings/*" name="Settings" element={<Settings />} />

          <Route path="/reports/*" name="Reports" element={<Reports />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
