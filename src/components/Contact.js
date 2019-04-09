import React, {Component} from "react";
// import {Link} from "react-router-dom";

import  edit from "./img/edit.svg";
import  trash from "./img/trash.svg";
import "./Contact.css"


class Contact extends Component {

	
	render() {
	let	{name,email,phone,photo,last_name,deleteContact,editContact} = this.props;
		return 	(
			<div className = "Contact">
				<div className = "img-box">
					<img src={photo} alt={name}/>
				</div>
				<div>
					<p className = "contact-name">{`${name} ${last_name}`}</p>
					<span>{email}</span>
					<p>{phone}</p>
				</div>
				<div>
					<img src={edit} alt="edit"
							 onClick = {editContact}
					/>
					<img src={trash} alt="trash"
								onClick = {deleteContact}
					/>
				</div>
			</div>

		)
	}
}


export default Contact;