import React, { Component } from 'react';

const Context = React.createContext();
const apikey = '0232d32e5ef52f58f49592b6ab67bd16';
export class Provider extends Component {
  state = {
    heading: 'Top 10 Tracks',
    track_list: [],
  };

  componentDidMount() {
    fetch(
      `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=it&f_has_lyrics=1&apikey=${apikey}`
    )
      .then(response => response.json())
      .then(data => {
        // FIXME: is object not array!
        console.log(typeof data.message.body.track_list);
        this.setState({
          track_list: data.message.body.track_list,
        });
      })
      .catch(error => console.log('[NetWork error]', error));
  }

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}
const { Consumer } = Context;
export { Consumer };
