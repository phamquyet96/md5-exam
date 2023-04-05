import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Table} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

function Home() {
    const [students, setStudents] = useState();
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3000/students", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            setStudents(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [flag])

    const handleCreate = () => {
        navigate("/create")
    }
    const handleEdit=(id)=>{
        navigate("/edit/"+id)
    }


    const deleteUser = (id) => {
        if (window.confirm('Bạn có chắc muốn xóa học sinh này không?')) {
            axios.delete('http://localhost:3000/students/' + id, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                setFlag(!flag)
            })
        }

    }
    return (
        <>
            <div className="container" style={{justifyItems:"center"}}>
                <br/>
                <h4>Danh sách sản phẩm</h4>
                <Button variant='success' onClick={handleCreate}>Thêm mới</Button>
                <br/>
                <br/>
                <Table striped bordered hover >
                    <thead >
                    <tr>
                        <th>#</th>
                        <th>Tên học sinh</th>
                        <th>Mô tả</th>
                        <th>Tình trạng</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {students && students.map((student, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Link to={`/detail/${student.id}`}>{student.name}</Link></td>
                            <td>{student.description}</td>
                            <td>{student.action}</td>
                            <td style={{display: "flex", justifyContent: "center"}}>
                                <Button variant="danger" onClick={() => {
                                    deleteUser(student.id)
                                }}>Xóa</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="primary" onClick={() => {
                                    handleEdit(student.id)
                                }}>Sửa</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Home;