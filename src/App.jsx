import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";
import ToDo from "./components/ToDo.jsx";

function App() {
  return (
    <>
      <Navbar bg = "dark" variant = "dark">
        <Navbar.Brand>ToDo App</Navbar.Brand>
      </Navbar>
      <ToDo />
    </>
  )
}

export default App;