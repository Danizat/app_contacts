import React, {Component} from "react";

import "./Button.css"



class Button extends Component {
	render() {
		const {whenClicked,btn_name} = this.props;
		return 	(
			<button
			 className = "Button"
			 onClick = {whenClicked}
			 >
			 {btn_name}
			 </button>
		)
	}
}


export default Button;