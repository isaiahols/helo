import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from 'axios';

import { updateUserId, updateUsername, updateUserPicture, updateAllPosts } from "../../ducks/reducer";

import Posts from "./makePosts";



class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      postsList: [],
    }
  }

  async componentDidMount() {

    let userData = await axios.get('/api/user-data');
    console.log(userData.data);
    let tests = await axios.get('/api/session')
    console.log(tests)

    if (userData.data !== 'nope') {

      this.props.updateUserId(userData.data.id);
      this.props.updateUsername(userData.data.username);
      this.props.updateUserPicture(userData.data.profile_pic);

      let posts = await axios.get('/api/posts')
      this.setState({
        postsList: posts.data
      })
      this.props.updateAllPosts(this.state.postsList)
    }
  }




  render() {
    const { allPosts } = this.props
    const { postsList } = this.state
    let mappedPosts = postsList.map(post => {
      return (
        <Posts post={post} />
      )
    })

    return (
      <div>
        <h1>Dashboard</h1>
        {mappedPosts}
      </div>
    )
  }
}

function mapStateToProps({ allPosts }) {

  return {
    allPosts
  }
}

export default connect(mapStateToProps, { updateUserId, updateUsername, updateUserPicture, updateAllPosts })(Dashboard)