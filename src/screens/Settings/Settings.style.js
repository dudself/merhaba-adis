import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    backgroundColor: 'white',
  },
  ttsOptions: {
    flex: 0.5,
    display: 'flex',
    alignItems: 'center',
  },
  boardOptions: {
    flex: 1.1,
    margin: -50,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#392f5a',
    lineHeight: 21,
    fontFamily: 'Montserrat_SemiBold',
    letterSpacing: 0.25,
  },
  slider: {
    margin: 5,
    width: 300,
    height: 40,
  },
});
