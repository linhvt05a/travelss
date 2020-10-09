
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native'

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
 const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff720d',
        height:65
    },
   header_btn_H :{
       height: 20,
       width:20,
       marginTop: 36,
       marginLeft: 20,
   },
   header_arrow_left:{
       width:10,
       height:10,
       marginLeft:20, 
       marginTop:30
   }
})

export default styles