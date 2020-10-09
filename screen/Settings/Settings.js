import React from 'react'
import {View,Text} from 'react-native'
import Header from '../../component/Header/Header'

function Settings({route, navigation }) {
    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
        </View>
    )
}

export default Settings
