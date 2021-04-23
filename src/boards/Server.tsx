import {Component} from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";

const styles = () => createStyles({
    title:{
        color: "#b0b3b8"
    }
})

interface ServerProps extends WithStyles<typeof styles> {}
class Server extends Component<ServerProps> {
    render() {
        return (<h1 className={this.props.classes.title}>Server</h1>);
    }
}
export default withStyles(styles)(Server);