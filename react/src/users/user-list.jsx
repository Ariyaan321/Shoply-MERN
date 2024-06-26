import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import UserItem from './user-item'

export default function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/users/")
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    const DataTable = () => {
        return users.map((res, i) => {
            return <UserItem user={res} key={i} />
        })
    }


    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Admin</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {DataTable()}
                </tbody>
            </Table>
        </div>
    )
}