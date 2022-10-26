import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../assets/css/form.css";
import * as Yup from "yup";
import numeral from 'numeral'
let initialState = {
	type_document: 0,
	document: 0
};
const FormSearch = () => {
	const [state, setState] = useState(initialState);
	const [validate, setValidate] = useState(false);

	const validations = Yup.object({
		type_document: Yup.number().positive().integer().required("Required"),
		document: Yup.string().required("Required").min(10)
	});

	useEffect(() => {
		validateForm();
	}, [state]);

	const sendForm = (e) => {
		e.preventDefault();
		console.log("send", state);
	};

	const validateForm = async () => {
		try {
			await validations.validate(state);
			setValidate(true);
		} catch (err) {
			setValidate(false);
		}
	};

	const setValue = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className="formSearch">
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Tipo de documento</Form.Label>
					<Form.Select
						name="type_document"
						value={state.type_document}
						onChange={setValue}
					>
						<option>Seleccione...</option>
						<option value="1">Cedula de ciudadania</option>
						<option value="2">Pasaporte</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Número de documento</Form.Label>
					<Form.Control
						name="document"
						type="text"
						value={numeral(state.document).format()}
						onChange={setValue}
                        maxlength="14"
					/>
				</Form.Group>
				{validate && (
					<button
						className="submitButton"
						type="submit"
						onClick={sendForm}
					>
						Buscar
					</button>
				)}
			</Form>
		</div>
	);
};

export default FormSearch;
