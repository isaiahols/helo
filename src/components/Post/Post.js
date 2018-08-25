import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { updateUserId, updateUsername, updateUserPicture, updateAllPosts } from "../../ducks/reducer";


class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: {},
      stay: true,
    }
  }

  async componentDidMount() {

    let userData = await axios.get('/api/user-data');
    console.log(userData.data);

    if (userData.data !== 'nope') {

      this.props.updateUserId(userData.data.id);
      this.props.updateUsername(userData.data.username);
      this.props.updateUserPicture(userData.data.profile_pic);

      this.setState({
        stay: false,
      })
      const { postid } = this.props.match.params;
      let freshPost = await axios.get(`/api/posts/one?id=${postid}`)
      console.log(freshPost.data[0])
      this.setState({
        post: freshPost.data[0],
      })


    }


  }

// I need to figure out how to move the user back to the home page if they are not signed in 

  render() {
    console.log(this.state)
    let { profile_pic, title, content, username, img } = this.state.post

    return (
      <div>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{content}</p>
        <h4>{username}</h4>
        <img src={profile_pic} />

        post
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { updateUserId, updateUsername, updateUserPicture, updateAllPosts })(Post)