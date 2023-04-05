import {Button, Form} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Update(){
    const {id}=useParams();
    const navigate=useNavigate();
    const [students,setStudents]=useState({
        name:"",
        price:"",
        stock:"",
        description:"",
    })

    useEffect(()=>{
        axios.get("http://localhost:3000/students/"+id)
            .then(res=>{setStudents(res.data)})
            .catch(err=>{
                console.log(err.message)})

    },[])

    const handleUpdate=async ()=>{
        await axios.put("http://localhost:3000/students/"+id, students)
            .then(res => {
                console.log(res.data)
                navigate("/")
            }).catch(err => {
                console.log(err)
            })
    }
    const handleCancel=()=>{
        navigate("/")
    }
    return (
        <>
            <div className="container"  style={{justifyItems:"center"}}>
                <div className="col-6">
                    <br/>
                    <h3>Sửa sinh viên</h3>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Tên sinh viên</Form.Label>
                            <Form.Control type="text" name="name" value={students.name} placeholder="Tên sinh viên" onChange={e => {
                                setStudents({...students, name: e.target.value})
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-6">
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control type="text" value={students.description} placeholder="Mô tả" onChange={e => {
                                setStudents({...students, description: e.target.value})
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-6">
                            <Form.Label>Tình trạng</Form.Label>
                            <Form.Control type="text" value={students.action} placeholder="Tình trạng" onChange={e => {
                                setStudents({...students, action: e.target.value})
                            }}/>
                        </Form.Group>
                        <br/>
                        <div style={{display: "flex"}}>
                            <Button variant="primary" onClick={handleUpdate}>Cập nhật</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="secondary" onClick={handleCancel}>Trở lại</Button>
                        </div>
                    </Form>
                </div>
            </div>


        </>
    )

}
export default Update;