import React, { useState, useEffect } from 'react';
import { View, Text,StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../../component/Header/Header';
import {Place, TourList} from './index'

function Tours({ route, navigation }) {
	const [ isLoading, setLoading ] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 6000);
	},[])
	if (route.params == undefined) {
		return (
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} route={route}/>
				{!isLoading && <ActivityIndicator size="small" color="red" style={{marginTop:300}}/>}
				{!isLoading && <Text style={styles.txtLoading}>Loading...</Text>}
				{isLoading && (
					<Place navigation={navigation}/>
				)}
			</View>
		);
	} else {
		return (
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} route={route}/>
				{<ActivityIndicator size="small" color="red" style={{marginTop:350}}/>}
					<Text style={styles.txtLoading}>Loading...</Text>
				{isLoading && (
					<TourList />
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	txtLoading:{
		marginLeft: 180,
		marginTop: 20
	  },
})

export default Tours;
