import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			registerName: '',
			registerEmail: '',
			registerPassword: ''
		}
	}

	onNameChange = (event) => {
		this.setState({registerName: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({registerEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({registerPassword: event.target.value});
	}

	onRegisterSubmit = () => {
		fetch('http://localhost:3002/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.registerName,
				email: this.state.registerEmail,
				password: this.state.registerPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			} else {
				console.log('err');
			}
		})
		.catch(err => console.log(err))
	}

	render() {
		return(
			<div>
				<h1>{'Register'}</h1>
				<input onChange={this.onNameChange} type='text' placeholder='Name' />
				<input onChange={this.onEmailChange} type='email' placeholder='Email' />
				<input onChange={this.onPasswordChange} type='password' placeholder='Password' />
				<button type='submit' onClick={this.onRegisterSubmit}>{'Submit'}</button>
			</div>
		);
	}
}



export default Register;