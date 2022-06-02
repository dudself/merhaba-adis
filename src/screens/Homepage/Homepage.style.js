import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'row',
       alignItems: 'center',
       flexWrap: 'wrap',
       justifyContent: 'space-evenly',
       paddingTop: 100,
     },
 
     input: {
       height: 100,
       width : 350,
       
       fontSize: 22,
       fontFamily: "Montserrat_SemiBold",
       letterSpacing: 0.25,
 
       borderColor: '#392f5a',
       borderRadius: 15,
       borderWidth: 5,
       paddingLeft: 20,
       paddingRight: 20,
     },
 
     button: {
       marginTop: 50,
       paddingVertical: 20,
       paddingHorizontal: 20,
 
       borderRadius: 50,
       backgroundColor: '#9dd9d2',
       
     },
 
     text: {
       fontSize: 16,
       color: '#392f5a',
       lineHeight: 21,
       fontFamily: "Montserrat_SemiBold",
       letterSpacing: 0.25,
     },
 })
 