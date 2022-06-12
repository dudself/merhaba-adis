import React, {Component, useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import db from '../../firebase.config.js';

import {getStorage, ref, getDownloadURL} from 'firebase/storage';

import FetchData from './FetchData';

const FetchSymbol = () => {
  const [url, setUrl] = useState();
  const fetchedData = FetchData();
  let id = Object.keys(fetchedData).map(({id}) => id);

  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, 'Genel/ben.svg');
      await getDownloadURL(reference)
        .then(x => {
          setUrl(x);
        })
        .catch(function (error) {
          console.log(
            'There has been a problem with your fetch operation: ' +
              error.message,
          );
          throw error;
        });
    };
    func();
  }, []);
  return (
    <View>
      <Image source={{uri: url}} />
    </View>
  );
};

export default FetchSymbol;
