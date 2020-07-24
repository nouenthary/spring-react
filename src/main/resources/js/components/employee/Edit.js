import React, {Component} from 'react'
import employeeServices from "../services/Employee"

export default class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            fieldName: "",
            fieldEmail: "",
            fieldPhone: "",
            fieldAddress: ""
        }
    }

    async componentDidMount() {
        console.log("Mounted Edit");
        const id = this.props.match.params.id;
        const res = await employeeServices.get(id)
        console.log(res);
        if (res.success) {
            console.log(res.data);
            this.setState({
                id: res.data.id,
                fieldName: res.data.name,
                fieldEmail: res.data.email,
                fieldAddress: res.data.address,
                fieldPhone: res.data.phone
            })
        } else {
            alert("Error ==>" + res.message)
        }
    }

    render() {

        let userId = this.props.match.params.id;

        return (
            <div>
                <h4>Edit Employee {userId} </h4>
                <hr/>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">Name employee</label>
                        <input type="text" className="form-control"
                               value={this.state.fieldName}
                               onChange={(value) => this.setState({fieldName: value.target.value})}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" placeholder="you@example.com"
                               value={this.state.fieldEmail}
                               onChange={(value) => this.setState({fieldEmail: value.target.value})}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" placeholder="1234 Main St"
                               value={this.state.fieldAddress}
                               onChange={(value) => this.setState({fieldAddress: value.target.value})}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address">Phone </label>
                        <input type="text" className="form-control" placeholder="123467890"
                               value={this.state.fieldPhone}
                               onChange={(value) => this.setState({fieldPhone: value.target.value})}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <button className="btn btn-primary btn-block" onClick={() => this.onClickUpdate()}
                                type="submit">Update
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    async onClickUpdate() {
        console.log("Execute update");
        const res = await employeeServices.update(this.state)
        if (res.success) {
            alert(res.message)
        } else {
            console.log("Error");
            console.log(res);
            alert("Error ==>" + JSON.stringify(res.data))
        }
    }
}