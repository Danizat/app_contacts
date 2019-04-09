import React, {Component} from "react";

import  {Layout,ContactForm} from "../components";



class AddContact extends Component {
render() {
		return (
			<Layout>
			<h3 className = "text-center">Добавить новый контакт</h3>
				<ContactForm/>
			</Layout>
		)
	}
}
//

export default AddContact;