import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

function TourList() {
    return (
       <View style={styles.tour_list_container}></View>
    )
}

const styles = StyleSheet.create({
    tour_list_container:{
       flex: 1
    }
})
export default TourList
