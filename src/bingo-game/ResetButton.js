import React from "react";
import {Button} from "@mui/material";
import './css/ResetButton.css';


class ResetButton extends React.Component {
    render() {
        return (
            <Button
                className="Reset-button"
                onClick={() => this.props.onClick()}
                variant={"contained"}
            >
                Restart Game
            </Button>
        );
    }
}

export { ResetButton };




