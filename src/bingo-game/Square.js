import React from "react";
import {Button} from "@mui/material";
import './css/Square.css';


class Square extends React.Component {
    render() {
        return (
            <Button
                className="Square"
                onClick={() => this.props.onClick()}
                variant={this.props.value ? "contained":"outlined"}
                color={this.props.isGreen ? "success" : "primary"}
            >
                {this.props.word}
            </Button>
        );
    }
}

export { Square };




