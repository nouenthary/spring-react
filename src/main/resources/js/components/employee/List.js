import React, {Component} from 'react';
import employeeServices from "../services/Employee"
import {Link} from "react-router-dom";

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listEmployee: []
        }
    }

    async componentDidMount() {
        console.log("Mounted list");
        const res = await employeeServices.list()
        console.log(res);
        if (res.success) {
            this.setState({listEmployee: res.list})
        } else {
            alert("Error ==>" + res.message)
        }
    }

    render() {
        return (
            <section>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.listEmployee.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address}</td>
                                    <td>{data.phone}</td>
                                    <td>
                                        <Link className="btn btn-outline-info" to={"/employee/edit/" + data.id}>Edit</Link>
                                        <a onClick={() => this.onClickDelete(i, data.id)} href="#"
                                           className="btn btn-danger"> Delete </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </section>
        )
    }

    async onClickDelete(i, id) {
        let yes = confirm("are you sure to delete this item?");
        if (yes === true) {

            const res = await employeeServices.delete(id)

            if (res.success) {
                alert(res.message)
                const list = this.state.listEmployee
                list.splice(i, 1)
                this.setState({listEmployee: list})
            } else {
                console.log(res);
                alert(JSON.stringify(res))
            }
        }
    }
}