import React, { Component } from "react";

class ListUsers extends Component {
  render() {
    return (
      <ol className="user-list">
        {this.props.profiles.map((profile) => (
          <li key={profile.id} className="profile-list-item">
            {this.props.users[profile.userID].name} favorite movie is{" "}
            {this.props.movies[profile.favoriteMovieID].name}
          </li>
        ))}
      </ol>
    );
  }
}

export default ListUsers;
