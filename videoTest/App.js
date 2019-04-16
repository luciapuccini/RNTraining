import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import ProgressBar from 'react-native-progress/Bar';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const height = width * 0.5625; // refactor for any video
const THRESHOLD = 100;

const secondsToTime = time => `${~~(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`;
export default class App extends Component {
  state = {
    error: false,
    paused: false,
    progress: 0,
    duration: 0,
  };

  position = {
    start: null,
    end: null,
  };

  handleError = meta => {
    const {
      error: { code },
    } = meta;
    const error = 'Error loading  video';
    this.setState({
      error,
    });
  };

  handleVideoLayout = event => {
    this.position.start = event.nativeEvent.layout.y - height + THRESHOLD;
    this.position.end = event.nativeEvent.layout.y + event.nativeEvent.layout.height - THRESHOLD;
  };

  handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const { paused } = this.state;
    const { start, end } = this.position;

    if (scrollPosition > start && scrollPosition < end && paused) {
      this.setState({ paused: false });
    } else if ((scrollPosition > end || scrollPosition < start) && !paused) {
      this.setState({ paused: true });
    }
  };

  handleMainButtonTouch = () => {
    const { progress } = this.state;
    if (progress >= 1) {
      this.player.seek(0);
    }

    this.setState(state => ({
      paused: !state.paused,
    }));
  };

  handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    const { duration } = this.state;
    const progress = (position / 250) * duration;

    this.player.seek(progress);
  };

  handleProgress = progress => {
    this.setState(state => ({
      progress: progress.currentTime / state.duration,
    }));
  };

  handleEnd = () => {
    this.setState({ paused: true });
  };

  handleLoad = meta => {
    this.setState({
      duration: meta.duration,
    });
  };

  render() {
    const { error, paused, duration, progress } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.fakeContent} />
        <View style={error ? styles.onError : styles.container}>
          {error ? (
            <View style={styles.onError}>
              <Icon name="exclamation-circle" color="red" size={30} />

              <Text style={styles.onError}>{error}</Text>
            </View>
          ) : (
            <View>
              <Video
                paused={paused}
                source={{ uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
                style={{ width: '100%', height }}
                resizeMode="contain"
                onLoad={this.handleLoad}
                onProgress={this.handleProgress}
                onEnd={this.handleEnd}
                ref={ref => {
                  this.player = ref;
                }}
                onError={this.handleError}
              />
              <View style={styles.controls}>
                <TouchableOpacity onPress={this.handleMainButtonTouch}>
                  <Icon name={!paused ? 'pause' : 'play'} size={30} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleProgressPress}>
                  <View>
                    <ProgressBar
                      progress={progress}
                      color="#FFF"
                      unfilledColor="rgba(255,255,255,.5)"
                      borderColor="#FFF"
                      width={250}
                      height={20}
                    />
                  </View>
                </TouchableOpacity>

                <Text style={styles.duration}>{secondsToTime(Math.floor(progress * duration))}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fakeContent: {
    height: 250,
    paddingTop: 20,
    backgroundColor: '#CCC',
    alignItems: 'center',
  },
  onError: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#000',
  },
  controls: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  mainButton: {
    marginRight: 15,
  },
  duration: {
    color: '#FFF',
    marginLeft: 15,
  },
});
