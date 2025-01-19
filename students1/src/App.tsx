import StudentRoot from "./StudentRoot";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api/tables/";
function App() {
  return (
    <div>
      {" "}
      <StudentRoot />{" "}
    </div>
  );
}
export default App;
