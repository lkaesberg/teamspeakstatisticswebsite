import React, {PureComponent} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

import Test from "./Test";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import BathtubIcon from '@material-ui/icons/Bathtub';

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];

Route.propTypes = {
    path: PropTypes.string,
    children: PropTypes.node
};
export default class App extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy';

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/about" component = {Button}>
                            <Button >About</Button>
                            <BathtubIcon/>
                            <Test name={"Lars"}/>
                            <Test name={"Sebastian"}/>
                        </Route>
                        <Route path="/users">
                            <Button >users</Button>
                        </Route>
                        <Route path="/">
                            <Button >path</Button>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
