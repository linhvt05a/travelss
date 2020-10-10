
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native'

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
 const styles = StyleSheet.create({
    header_contain_bell: {
        backgroundColor: '#ff720d',
        height:70,
        alignItems: 'flex-end'
    },
    header_contain_arrow: {
        backgroundColor: '#ff720d',
        height:65,
    },
   header_btn_H :{
       height: 20,
       width:20,
       marginTop: 40,
       marginRight: 30
   },
   header_arrow_left:{
       width:10,
       height:10,
       marginLeft:20, 
       marginTop:30
   }
})

export default styles