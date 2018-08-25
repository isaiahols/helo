import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { updateUsername, updatePassword, updateUserId, updateUserPicture } from "../../ducks/reducer";


class Auth extends Component {
  constructor(props) {
    super(props);
  }

  async handleLogin() {
    console.log(this.props);
    const { username, password, updateUserId, updateUserPicture } = this.props

    let body = { username, password }
    let userInfo = await axios.post('/api/auth/register', body)

    updateUserId(userInfo.data.id);
    updateUserPicture(userInfo.data.profile_pic)
  }

  async handleRegister() {
    console.log(this.props);

    const { username, password, updateUserId,  updateUserPicture} = this.props

    let body = { username, password }
    let userInfo = await axios.post('/api/auth/register', body);
    console.log(userInfo.data[0]);

    updateUserId(userInfo.data.id);
    updateUserPicture(userInfo.data.profile_pic)
  }

  render() {
    const { updateUsername, updatePassword } = this.props
    return (
      <div>
        <div>
          <h1>Helo</h1>
          <div>
            <h3>Username: </h3>
            <input type="text" onChange={(e) => updateUsername(e.target.value)} />
          </div>
          <div>
            <h3>Password: </h3>
            <input type="password" onChange={(e) => updatePassword(e.target.value)} />
          </div>
          <Link to='/dashboard'>
            <button onClick={() => this.handleLogin()}>Login</button>
          </Link>
          <Link to='/dashboard'>
            <button onClick={() => this.handleRegister()} >Register</button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { username, password } = state;
  return {
    username,
    password,
  }
}

export default connect(mapStateToProps, { updateUsername, updatePassword, updateUserId, updateUserPicture })(Auth)
