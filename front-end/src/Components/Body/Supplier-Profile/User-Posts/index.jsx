import React, {Component} from 'react';
class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="users-posts">
        <ul id="users-posts-list">
          <li className="user-post">Post1</li>
          <li className="user-post">Post2</li>
          <li className="user-post">Post3</li>
        </ul>
      </div>
    )
  }
}
export default UserPosts;