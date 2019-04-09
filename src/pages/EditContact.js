import React, {Component} from "react";

import  {Layout,EditForm} from "../components";



class EditContact extends Component {
render() {
		return (
			<Layout>
			<h3 className = "text-center">Изменить контакт</h3>
				<EditForm/>
			</Layout>
		)
	}
}
//

export default EditContact;