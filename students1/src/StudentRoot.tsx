import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import StudentEdit from "./pages/StudentEdit";
import StudentList from "./pages/StudentList";

const Div = styled.div`
  border: 1px solid gray;
  width: 800px;
  margin: 10px auto;
  box-shadow: 5px 5px 5px #ddd;
  padding: 30px;
  & .error {
    margin-top: 20px;
    color: red;
    border: 1px solid #faa;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #fee;
  }
`;
function StudentRoot() {
  return (
    <Div>
      {" "}
      <BrowserRouter>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<StudentList />} />{" "}
          <Route path="/edit/:id" element={<StudentEdit />} />{" "}
          <Route path="/create/" element={<StudentEdit />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </Div>
  );
}
export default StudentRoot;
