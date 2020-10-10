import React, {useEffect, useState} from 'react'
import {View,Text, ActivityIndicator,StyleSheet} from 'react-native'
import Header from '../../component/Header/Header'

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
            {!isLoading && <ActivityIndicator size="small" color="red" style={{marginTop:300}}/>}
            { !isLoading &&<Text style={styles.txtLoading}>Loading...</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    txtLoading:{
		marginLeft: 180,
		marginTop: 20
	},
})
export default Settings
