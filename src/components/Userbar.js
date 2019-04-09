import React, {Component} from "react";

import "./Userbar.css"


class Userbar extends Component {
	render() {
		const {u_name,u_photo} = this.props;
		return 	(
				<div className = "Userbar">
					<div className= "user-photo">
					<img src={u_photo} alt="User"/>
					</div>
					<p>{u_name}</p>
				</div>
		)
	}
}


export default Userbar;