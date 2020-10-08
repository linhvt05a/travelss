import React from 'react'
import {View,Text,Image, StyleSheet,Dimensions,TouchableOpacity} from 'react-native'


const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

function Header({navigation, route}) {
    if(route.name == "Home"){
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.openDrawer()}>
                    <Image source={require('./IconApp/menu.png')} style={ styles.image}/>
                </TouchableOpacity>
            </View>
        )
    }else{
        return (
            <View style={styles.header}>
            </View>
        ) 
    }

}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'red',
        width: W,
        height: H/8 - 40,
        justifyContent:'center',
        alignItems: 'flex-start'
    },
    image:{
        width:20,
        height:20,
        position: 'absolute',
        marginLeft: 20,
    }
})

export default Header
