import React, {Component} from "react";


import  Userbar from "./Userbar";
import  Button from "./Button";
import  Pictures from "./Pictures";
import  imgDefault from "./img/user-default.svg";

import "./Layout.css"

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			
			user_name: "Имя Пользователя",
			user_photo: imgDefault,
			btn_name: "Другие"
		}
	}
	render() {
		return 	(
				<div className = "Layout row">
					<div className = "col-lg-6  col-md-6  col-12">
						<Userbar
							u_name = {this.state.user_name}
							u_photo = {this.state.user_photo}
							/>
							<Pictures/>
							<div className = "text-center">
								<Button  btn_name = {this.state.btn_name}/>
							</div>	
					</div>
					<div className = "col-lg-6 col-md-6  col-12">
						<div className= "content-box">
							{this.props.children}
						</div>
					</div>
				</div>
		)
	}
}
//

export default Layout;