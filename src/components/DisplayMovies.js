import React, { Component } from "react";

class DisplayMovies extends Component {
  render() {
    const { moviesArr } = this.props;
    console.log(moviesArr);
    return (
      <div>
        {moviesArr.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.name}</h2>
            {movie.favMovies.length > 0 ? (
              <ul>
                {movie.favMovies.map((user) => (
                  <li key={user}>{user}</li>
                ))}
              </ul>
            ) : (
              <p>None of the current users liked this movie</p>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayMovies;
