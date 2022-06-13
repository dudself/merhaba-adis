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

  tts: {
    flex: 0.5,
    display: 'flex',
    alignItems: 'center',
  },

  board: {
    flex: 1.1,
    alignItems: 'center',
    margin: 17,
    backgroundColor: 'white',
  },

  input: {
    height: 130,
    width: 350,
    padding: 15,
    fontSize: 22,
    fontFamily: 'Montserrat_SemiBold',
    letterSpacing: 0.25,

    borderColor: '#392f5a',
    borderRadius: 15,
    borderWidth: 5,
  },

  buttonMap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  text: {
    fontSize: 16,
    color: '#392f5a',
    lineHeight: 21,
    fontFamily: 'Montserrat_SemiBold',
    letterSpacing: 0.25,
  },
});
