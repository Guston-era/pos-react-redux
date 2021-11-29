import "./css/App.css";
import SideBar from "./components/layout/SideBar";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flexed-content">
        <SideBar />
        <p style={{ color: "white" }}>iuyftrs</p>
      </div>
    </div>
  );
}

export default App;
