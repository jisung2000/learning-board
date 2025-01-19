import { useNavigate } from "react-router"
import type { Student } from "../utils/types";

type Props ={
    student : Student
}
function StudentItem({student}:Props){
    const navigate = useNavigate();
    const onClick = () => navigate('/edit/'+ student.id);

    return(
        <tr onClick={onClick}>
            <td>{ student.id}</td>
            <td>{ student.studentNo}</td>
            <td>{ student.name}</td>
            <td>{ student.email}</td>
            <td>{ student.phone}</td>
            <td>{ student.sex}</td>
            <td>
                {student.departmentId} -
                {student.departmentId_data?.name}
            </td>

        </tr>
    )

}

export default StudentItem;