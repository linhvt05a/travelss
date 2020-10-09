import React,{useEffect} from 'react'
import {View,Text, ActivityIndicator} from 'react-native'
import Header from '../../component/Header/Header'


function Account({route, navigation}) {
    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
          tabBarVisible: false
        });
        return () =>
          parent.setOptions({
            tabBarVisible: true
          });
      }, []);
    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <ActivityIndicator size="small" color="black" />
        </View>
    )
}

export default Account
