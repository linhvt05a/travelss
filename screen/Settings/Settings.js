import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import Header from '../../component/Header/Header'
import{LoadingView} from '../../component/ActivityIndicator/index'

function Settings({route, navigation }) {
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 6000);
    },[])

    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation} route={route}/>
            <LoadingView label="Loading..." color="red" size="small" />
        </View>
    )
}

export default Settings
