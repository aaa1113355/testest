import React from 'react';
import './App.css';
import Register from './Register'
import SignIn from './SignIn'
import Home from './Home'

const initialState = {
  route: 'signin',
  user : {
    id: 0,
    name: '',
    email: '',
    joined: ''
  }
}
  

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (user) => {
    this.setState({user});
  }

  onRouteChange = (route) => {
    this.setState({route})
  }

  render() {
    return (
      <div className="App">
        { this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          : this.state.route === 'home'
            ? <Home user={this.state.user}/>
            : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        }
      </div>
    );
  }
}

export default App;
