import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const apikey = '0232d32e5ef52f58f49592b6ab67bd16';

export const Lyrics = props => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState('');
  const id = props.navigation.getParam('itemId');

  const useFetch = () => {
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apikey}`
        );
        const json = await response.json();
        setLyrics(json.message.body.lyrics.lyrics_body);
      };
      fetchData();
    }, []);

    return [lyrics];
  };
  const [lyric] = useFetch();
  return <Text>{lyric}</Text>;
};

export default Lyrics;
