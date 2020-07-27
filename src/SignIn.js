import React from 'react';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail : '',
			signInPassword : '',			
		}
	}

	

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	onSignInSubmit = () => {
		fetch('http://localhost:3002/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			} else {
				console.log('login error');
			}
		})
		.catch(err => console.log)
	}



	render() {
		return(
			<div>
				<h1>{'Sign In'}</h1>
				<input onChange={this.onEmailChange} type='email' placeholder='email' />
				<input onChange={this.onPasswordChange} type='password' placeholder='Password' />
				<button onClick={this.onSignInSubmit} type='submit' >{'Submit'}</button>
				<p onClick={() => {this.props.onRouteChange('register')}} > {'Register'} </p>
			</div>
		);
	}
}


export default SignIn;