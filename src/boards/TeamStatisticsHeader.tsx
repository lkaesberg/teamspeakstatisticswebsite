import {BottomNavigation, BottomNavigationAction, createStyles, Theme, WithStyles, withStyles} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import React, {PureComponent} from "react";

const styles = (theme: Theme) => createStyles({
        bottomNavigation: {
            backgroundColor: "transparent",
            width: "100%",
        },

        bottomNavigationButton: {
            color: theme.palette.primary.main
        },
        header: {
            padding: "0% 5%"
        },

        Caption: {
            padding: 10,
            color: "#e4e6eb",
            fontFamily: "Quicksand",
            fontWeight: 400,
            fontSize: 60,
            margin: "auto",
            boxShadow: "gray"
        },

        divFlex: {
            width: "max-content",
            margin: "auto"
        }

    })
;

interface TeamStatisticsHeaderProps extends WithStyles<typeof styles> {
}

class TeamStatisticsHeader extends PureComponent<TeamStatisticsHeaderProps> {
    render() {

        return (<header className={this.props.classes.header}>
            <div className={this.props.classes.divFlex}>
                <h1 className={this.props.classes.Caption}>TeamStatistics</h1>
            </div>
            <BottomNavigation
                showLabels
                className={this.props.classes.bottomNavigation}
            >
                <BottomNavigationAction className={this.props.classes.bottomNavigationButton} href={"/"} label="Server"
                                        icon={<HomeIcon/>}/>
                <BottomNavigationAction className={this.props.classes.bottomNavigationButton} href={"/leaderboard"}
                                        label="Leaderboard"
                                        icon={<DashboardIcon/>}/>
                <BottomNavigationAction className={this.props.classes.bottomNavigationButton} href={"/users"}
                                        label="Users" icon={<PersonOutlineIcon/>}/>
            </BottomNavigation>
        </header>);
    }
}

export default withStyles(styles, {withTheme: true})(TeamStatisticsHeader);