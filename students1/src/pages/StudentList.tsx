import { useEffect, useState } from "react"
import type { Student } from "../utils/types"
import axios from "axios";
import { useNavigate } from "react-router";
import StudentItem from "./StudentItem";
import styled from "styled-components";
const Div = styled.div`
    & > button { padding: 0.2em 1.5em; font-size: 11pt;
    margin-bottom: 5px; float: right;}
    &table {border-collapse: collapse; width: 100%; }
    &thread { background-color: #eee; text-align: center; }
    &td { border: 1px solid gray; padding: 4px; }
    &td:nth-chile(1) { text-align: center; width: 30px; }
    &tbody tr:hover { background-color: #ffe; cursor: pointer; }

`;
function StudentList(){
    const [students, setStudents] = useState<Student[]>([]);
    const [errorMsg, setErrorMsg] = useState<string|null>(null);

    const loadStudents = async () =>{
        try{
            const url = "student/rows?_limit=999&_ordering=-id&_extend=departmentId"
            const response = await axios.get(url);
            setStudents(response.data.data);   
        }   catch(error){
            const s = error instanceof Error ? error.message : error;
            setErrorMsg(String(s));
        }
    };

    //마운트 될 때, 즉 컴포넌트 화면에 처음 보이게 될때, 
    // loadStudents함수를 호출
    useEffect(()=>{loadStudents(); }, []);

    const navigate = useNavigate()
    const onCreate = () => navigate('/create');

    const trlist = students.map(student=>
        <StudentItem key={student.id} student={student}/>);
    
    return(
        <Div>
            <button type="button" onClick={onCreate}>등록</button> 
            <table>
                <thead>
                    <tr>
                        <td>id</td><td>학번</td><td>이름</td><td>이메일</td>
                        <td>전화</td><td>성별</td><td>학과</td>
                    </tr>
                </thead>
                <tbody>
                    {trlist}
                </tbody>
            </table>
            { errorMsg && <div className="error">{errorMsg}</div>}
        </Div>
    )

}

export default StudentList;
