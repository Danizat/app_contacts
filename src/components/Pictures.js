import React, {Component} from "react";

import "./Pictures.css"
import pictures from "./data/pictures"



class Pictures extends Component {
	render() {
		return 	(
				<div className = "Pictures">
				{pictures.map(p => {
						return( <img src = {p} alt = "pic" key = {p}/>)
					})}
				</div>
		)
	}
}


export default Pictures;