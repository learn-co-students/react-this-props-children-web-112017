// Code Goes Here
import React from 'react'

class App extends React.Component {
  render() {
    return(
      <MovieBrowser>
        <Movie title="Mad Max: Fury Road" />
        <Movie title="Harry Potter & The Goblet Of Fire" />
      </MovieBrowser>
    )
  }
}

export default class MovieBrowser extends React.Component {
  render() {
    const currentPlayingTitle = 'Mad Max: Fury Road';
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isPlaying: child.props.title === currentPlayingTitle
      });
    });

    return (
      <div className="movie-browser">
        {childrenWithExtraProp}
      </div>
    );
  }
}
