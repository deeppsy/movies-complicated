import React, { Component } from "react";

class DisplayMovies extends Component {
  render() {
    const { moviesArr } = this.props;

    return (
      <div>
        {moviesArr.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.name}</h2>
            {movie.favMovies.length > 0 ? (
              <div>
                <p>Liked by:</p>
                <ul>
                  {movie.favMovies.map((user) => (
                    <li key={user}>{user}</li>
                  ))}
                </ul>
              </div>
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
