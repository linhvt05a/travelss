import React from 'react'
import {View , Button,Text, Image, StyleSheet} from 'react-native'

function Login({route, navigation}) {
   
    return (
       <View style={{flex: 1, backgroundColor:'blue'}}>
            <Button
        title="Go to Details"
        onPress={() => navigation.push('Account')}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    }
})
export default Login
