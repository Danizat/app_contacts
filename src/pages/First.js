import React, {Component} from "react";
import {Link} from "react-router-dom";


import  {Layout,Button} from "../components";
import "./First.css"


class First extends Component {
	constructor() {
		super();
		this.state = {
			btn_name: "Загрузить"
		}
	}
	render() {
		return 	(
			<Layout>
				<h2>Делатесь картинами с друзьями</h2>
				<p>Загрузите ваши контакты и делитесь с нимим вашими картинами...</p>
				<div className = "text-center">
					<Link to="/contacts">
						<Button btn_name ={this.state.btn_name}/>
					</Link>
				</div>
			</Layout>
		)
	}
}
//

export default First;