

import React, { Component } from "react";

class ButtonClass extends Component {
    state = {
        message: "subscribe"
    }

    render() {
        return (
            <>
                <button>{this.state.message}</button>
            </>
        );
    }
}

export default ButtonClass;
