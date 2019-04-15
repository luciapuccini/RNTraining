import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    heading: 'Top 10 Tracks',
    track_list: [{ track: { track_name: 'abc' } }, { track: { track_name: 'abc' } }],
  };

  componentDidMount() {}

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}
const { Consumer } = Context;
export { Consumer };
