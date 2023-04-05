import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";

function Detail() {
    const {id} = useParams();
    const [student, setStudents] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/students/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            setStudents(res.data)
        }).catch(err => {
            console.log(err)
        })
    })


    const handleBack = () => {
        navigate("/")
    }
    return (
        <>
            <div className="container col-lg-10">
                <br/>
                <br/>
                <h3>Chi tiết sinh viên</h3>
                <div className="row">
                    <div className="col-2">
                        <h6>Tên học sinh :</h6>
                        <h6>Mô tả :</h6>
                        <h6>Tình trạng :</h6>
                        <Button variant="primary" onClick={handleBack}>Trở lại</Button>
                    </div>
                    <div className="col-3">
                        <h6>{student.name}</h6>
                        <h6>{student.description}</h6>
                        <h6>{student.action}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;