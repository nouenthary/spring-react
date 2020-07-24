import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./employee/Nav"
import Form from "./employee/Form"
import List from "./employee/List"
import Edit from "./employee/Edit"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

class Main extends React.Component {
    render() {
        return (
            <Router>
                <main>
                    <Nav/>
                    <Switch>
                        <Route path="/employee/index" exact component={List}/>
                        <Route path="/employee/form" component={Form}/>
                        <Route path="/employee/edit/:id" component={Edit}/>
                    </Switch>
                </main>
            </Router>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('main-employee'));