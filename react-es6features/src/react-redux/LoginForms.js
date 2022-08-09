import React, { useState } from 'react'

function LoginForms() {
	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		dropDown: 'select'
	}
	const [name, setName] = useState(initialState)

	const handleChange = (e) => {
		setName({
			...name,
			firstName: e.target.value
		})
	}
	const handleSubmit = (e) => {
		alert(`${name.firstName} ${name.lastName} ${name.email} ${name.password}`)
		e.preventDefault()
	}
	const handleDropDownChnage = (e) => {
		setName({
			dropDown: e.target.value
		})
	}
	return (
		<form onSubmit={handleSubmit}>
			<div class="page-header">
				<h1>Registerhere <i>!</i></h1>
			</div>
			<div className="jumbotron jumbotron-fluid">
				FirstName:
				<input
					type="text"
					placeholder='Enter your firstname'
					value={name.firstName}
					onChange={handleChange}
				/>
				<br />
				LastName:
				<input
					type="text"
					placeholder='Enter your lastname'
					value={name.lastName}
					onChange={handleChange}
				/>
				<br />
				Email:
				<input
					type="text"
					placeholder='Enter your email..'
					value={name.email}
					onChange={handleChange}

				/>
				<br />
				Create Password:
				<input
					type="text"
					placeholder='Create your password'
					value={name.password}
					onChange={handleChange}

				/>
				<br />
				Re-enter Password:
				<input
					type="text"
					placeholder='Re-eneter your password'
					value={name.password}
					onChange={handleChange}
				/>
				<br />
			</div>
			<div>
				Occupation
				<select
					value={name.dropDowndropDown}
					onChange={handleDropDownChnage}	>
					<option value='Java Developer'>Java Developer</option>
					<option value='Angular Developer'>Angular Developer</option>
					<option value='React-Native Developer'>React-Native Developer</option>

				</select>
				<br />
			</div>
			<button onClick={handleSubmit}>
				SignUp!
			</button>

			{/* <h2>Your first name is - {name.firstName}</h2>
			<h2>Your last name is - {name.lastName}</h2> */}
			{/* <h2>{JSON.stringify(name)}</h2> */}
		</form>
	)
}

export default LoginForms;