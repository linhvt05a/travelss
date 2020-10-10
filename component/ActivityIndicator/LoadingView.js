import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import {loadingStyle} from'./index'

function LoadingView({size, color, label}) {
    return (
        <View style={loadingStyle.loading_container}>
            <ActivityIndicator size={size} color={color} style={loadingStyle.loading_view}/>
            <Text style={loadingStyle.txtLoading}>{label}</Text>
        </View>
    )
}

export default LoadingView
