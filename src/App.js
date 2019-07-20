import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from "react-router-dom";

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <nav>
                        <ul>
                            <li><NavLink to="/users">Users</NavLink></li>
                            <li><NavLink to="/courses">Courses</NavLink></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/users" component={Users}/>
                        <Route path="/courses" component={Courses} />
                    </Switch>
                    <Redirect from="/all-courses" to="/courses" component={() => (<h1>404</h1>)}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
