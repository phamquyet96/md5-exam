import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react"
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function Create() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        action: ""
    })
    const handleAdd = async () => {
        let response = await axios.post('http://localhost:3000/students', formData);
        setFormData({
            name: "",
            description: "",
            action: ""
        })
        navigate("/");
    }

    const handleCancel = () => {
        navigate("/")
    }

    return (
        <>
            <div className="container"  style={{justifyItems:"center"}}>
                <div className="col-6">
                    <br/>
                    <h3>Thêm sinh viên</h3>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Tên sinh viên</Form.Label>
                            <Form.Control type="text" placeholder="Tên sinh viên" onChange={e => {
                                setFormData({...formData, name: e.target.value})
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-6">
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control type="text" placeholder="Mô tả" onChange={e => {
                                setFormData({...formData, description: e.target.value})
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-6">
                            <Form.Label>Tình trạng</Form.Label>
                            <Form.Control type="text" placeholder="Tình trạng" onChange={e => {
                                setFormData({...formData, action: e.target.value})
                            }}/>
                        </Form.Group>
                        <br/>
                        <div style={{display: "flex"}}>
                            <Button variant="primary" onClick={handleAdd}>Thêm mới</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="secondary" onClick={handleCancel}>Trở lại</Button>
                        </div>
                    </Form>
                </div>
            </div>


        </>
    )

}

export default Create;




