import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import LeaderBoard from "./boards/LeaderBoard";
import Users from "./boards/Users";
import Server from "./boards/Server";
import TeamStatisticsHeader from "./boards/TeamStatisticsHeader";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";

const styles = () => createStyles({

        divFlex: {
            width: "100%",
            display: "flex"
        },

        section: {
            padding: "1% 5%",
            backgroundColor: "#3a3b3c"
        },

        footer: {
            backgroundColor: "#242526",
            display: "flex",
            flexDirection: "row-reverse",
            position: "absolute",
            bottom: 0,
            width: "100%"
        },

        ul: {
            listStyleType: "none",
            marginLeft: -40

        },

        li: {
            display: "inline-block",
            marginRight: 20,
            textDecoration: "none"
        },
        decorationlessLink: {
            color: "#E3E3E3",
            textDecoration: "none"
        }

    })
;

interface AppProps extends WithStyles<typeof styles> {
}

class App extends Component<AppProps> {
    render() {
        return (
            <Router>
                <div>
                    <TeamStatisticsHeader/>
                    <section className={this.props.classes.section}>
                        <Switch>
                            <Route exact path="/leaderboard">
                                <LeaderBoard/>
                            </Route>
                            <Route path="/users">
                                <Users/>
                            </Route>
                            <Route path="/">
                                <Server/>
                            </Route>
                        </Switch>
                    </section>
                    <footer className={this.props.classes.footer}>
                        <ul className={this.props.classes.ul}>
                            <li className={this.props.classes.li}>
                                <Link className={this.props.classes.decorationlessLink}
                                      to={"/impressum"}>Impressum</Link>
                            </li>
                            <li className={this.props.classes.li}>
                                <Link className={this.props.classes.decorationlessLink} to={"/kontakt"}>Kontakt</Link>
                            </li>
                        </ul>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default withStyles(styles, {withTheme: true})(App);

