import React from 'react'
export default class Component extends React.Component {
  render() {
    const newChildren = React.Children.map(this.props.children, child => <button>{child}</button>)

    return (
      <div>
        {newChildren}
      </div>
    );
  }
}
