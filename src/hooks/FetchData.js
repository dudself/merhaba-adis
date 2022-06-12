import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import db from '../../firebase.config.js';

var cards;

function FetchData() {
  cards = db
    .collection('boards')
    .get()
    .then(collectionSnapshot => {
      collectionSnapshot.forEach(documentSnapshot => {
        cards = {
          id: documentSnapshot.id,
          bgColor: documentSnapshot.data()['bgColor'].toString(),
          text: documentSnapshot.data()['text'].toString(),
          textColor: documentSnapshot.data()['textColor'].toString(),
        };
      });
    });
  return cards;
}

export default FetchData;
