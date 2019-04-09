import React, {Component} from "react";
import {Link,Redirect} from "react-router-dom";

import Button from "./Button";
import defaultPhoto from "./img/user-default.svg";
import edit_icon from "./img/edit.svg";
import "./ContactForm.css"
import "./Inputs.css"



class ContactForm extends Component {
	constructor() {
		super();
		this.state = {	
			contacts: 	JSON.parse(localStorage.getItem("contacts")),
			name: "",
			last_name: "",
			email: "",
			phone: "",
			id: "",
			redirect: false,
			file: defaultPhoto,
			warning: "",
			isInputValid: false
		}

		this.addContact = this.addContact.bind(this)	
		this.checkInputsValue = this.checkInputsValue.bind(this);
		this.renderRedirect = this.renderRedirect.bind(this);
		this.imgChange = this.imgChange.bind(this);	
	}
	renderRedirect()  {

    if (this.state.redirect) {
      return <Redirect to='/contacts' />
    }
	}
	imgChange(e)  {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

	checkInputsValue(e) {
		this.setState({
			[e.target.name] : e.target.value
		});
		if(!(e.target.value.trim().length)&& (e.target.name !== "last_name")){
			this.setState({
				isInputValid:false,
				warning: "Пожалуйта заполните поле!"
			});				
		}
		else if((e.target.name === "email") && !(e.target.value.match(/.@./gm))) {
			this.setState({
				isInputValid:false,
				warning: `Введите правилный email!`
			});	
		}
		else if((e.target.name === "phone") && (e.target.value.match(/[^(?:+)\d]+/gm))) {
			this.setState({
				isInputValid:false,
				warning: "Введите валидный номер!"
			});	
		}
		else{
			this.setState({
				warning:"",
				isInputValid: true
			})
		}
	}
componentDidMount() {
		this.setState(
			{
				contacts:	JSON.parse(localStorage.getItem("contacts"))  
			}
		);
	}

	componentDidUpdate() {
		localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
	}

	addContact(e) {
		e.preventDefault();	

	if(this.state.isInputValid){
		
	this.setState({
		contacts: [...this.state.contacts,{
									name: this.state.name,
									last_name: this.state.last_name,
									email: this.state.email,
									phone: this.state.phone,
									id:this.state.contacts.length,
									photo: this.state.file
							}],
		redirect:true
});


	}		
}
	render() {
		return 	(
			<form action=""
						className = "text-center"
						onChange= {this.checkInputsValue}
						autoComplete = "off">
				<div className = "contactFormImg ">
					<img src={this.state.file} alt = "contact-img"/>
				</div>
						
				<label htmlFor="contact_image" className = "file-label">				
					Выберите картинку 
					<img src={edit_icon} alt="..."/>
				</label>

				<input  type="file"
									accept="image/png, image/jpeg,image/svg, image/jpg"	
									onChange = {this.imgChange}
									id = "contact_image"
														
				/>	
					
				<input
					type="text"
					className = "Inputs"
					placeholder = "Имя"
					name = "name"
					autoComplete = "off"
					required		
				/>
				<input
					type="text"
					className = "Inputs"
					placeholder = "Фамилия"
					name = "last_name"
					autoComplete = "off"
				/>
				<input
					type="email"
					className = "Inputs"
					placeholder = "Email"
					name = "email"
					autoComplete = "off"
					required
		/>
				<input
					type="text"
					className = "Inputs"
					placeholder = "Номер телефона"
					name = "phone"
					autoComplete = "off"
					required
			/>
				<div>
				<p className ="contactFormWarning">{this.state.warning}</p>
					<Link to = "/contacts">
						Назад
					</Link>
				</div>
			
				{this.renderRedirect()}
				<Button btn_name = "Сохранить"
								whenClicked = {this.addContact}
					/>
			</form>
		)
	}
}
//

export default ContactForm;