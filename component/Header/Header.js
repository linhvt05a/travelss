import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './headerStyle'


function Header({navigation,route}) {
    console.log(route)
    if(route.name === "Home"){
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()} style={styles.header_btn_H}>
                    <Image source={require('../IconApp/menu20.png')} />
                </TouchableOpacity>
            </View>
          )
    }else{
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.header_arrow_left}>
                    <Image source={require('../IconApp/left_arrow.png')} />
                </TouchableOpacity>
            </View>
        )
    }
    
}

export default Header
