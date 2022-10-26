import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../assets/css/form.css";
import { useParams, useHistory } from "react-router-dom";
import { users } from "../assets/mocks/user";

const Search = () => {
	let { type, document } = useParams();
	const [user, setUser] = useState({});
	const [found, setFound] = useState(false);
	const history = useHistory();
	useEffect(() => {
		let foundUser = users.filter(
			(user) =>
				user.document == document.replaceAll(",", "") &&
				user.type_document == type
		);
		if (foundUser.length > 0) {
			setUser(foundUser[0]);
			setFound(true);
		}
	});

	const goBack = () => {
		history.push("/");
	};

	return (
		<div className="formSearch">
			<Form>
				<Form.Label>Informacion Básica</Form.Label>

				{found ? (
					<>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Primer Apellido</Form.Label>
							<Form.Control
								name="firs_name"
								type="text"
								disabled
								value={user.first_name}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Primer Nombre</Form.Label>
							<Form.Control
								name="document"
								type="text"
								disabled
								value={user.last_name}
							/>
						</Form.Group>
					</>
				) : (
					<h2>Usuario no encontrado</h2>
				)}
			</Form>
			<button onClick={goBack} className="backButton">
				Volver
			</button>
		</div>
	);
};

export default Search;
