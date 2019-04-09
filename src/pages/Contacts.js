import React, {Component} from "react";
import {Link,Redirect} from "react-router-dom";



import  {Layout,Button,Contact} from "../components";
import contacts from "../components/data/contacts";
import "./Contacts.css"


class Contacts extends Component {
	constructor() {
		super();
		this.state = {
			contacts: [],
			current_edit: [],
			redirect: false
		}

		this.deleteContact = this.deleteContact.bind(this);
		this.editContact = this.editContact.bind(this);
		this.renderRedirect = this.renderRedirect.bind(this);

	}

	componentDidMount() {
		this.setState(
			{
				contacts:	JSON.parse(localStorage.getItem("contacts"))  ||
									localStorage.setItem("contacts",JSON.stringify(contacts))	 
			}
		);
	}
componentDidUpdate() {
	localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
	localStorage.setItem("current_edit", JSON.stringify(this.state.current_edit));
}

renderRedirect()  {
	if (this.state.redirect) {
		return <Redirect to='/editcontact' />
	}
}

	
editContact(id) {
	this.setState({
		current_edit: this.state.contacts.filter(ce => ce.id === id),
		redirect:true
	});
	
}


deleteContact(id) {
		this.setState({
			contacts: this.state.contacts.filter(c => c.id !== id)
		});
		
}

render() {
	let	contacts_array = this.state.contacts;
	let contacts = contacts_array.map(c => {
		return (
			<Contact 
				key = {c.id}
				name = {c.name}
				last_name = {c.last_name}
				phone = {c.phone}
				photo = {c.photo}
				email = {c.email}
				deleteContact = {() => {this.deleteContact(c.id)}}
				editContact = {() => {this.editContact(c.id)}}
			/>
		)
	})
		return 	(
			<Layout>
			{this.renderRedirect()}
				{contacts}
				<div className = "text-center">
					<Link to="/addcontact">
						<Button btn_name ="Добавить"/>
					</Link>	
				</div>
			</Layout>
		)
	}
}
//

export default Contacts;