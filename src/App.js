import { Outlet } from "react-router-dom"
import Menu from "./components/Menu/Menu.jsx";

function App() {
  return (
    <div className="App">
        <Menu />
        <Outlet />
    </div>
  );
}

export default App;
