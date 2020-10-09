import React, { useState } from 'react';
import { View, Text,StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../../component/Header/Header';
import {Place, TourList} from './index'

function Tours({ route, navigation }) {
	const [ isLoading, setLoading ] = useState(false);
	if (route.name == 'Tours') {
		setTimeout(function() {
			setLoading(true);
		}, 5000);
	}
	if (route.params == undefined) {
		return (
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} route={route} />
				{!isLoading && <ActivityIndicator size="small" color="red" style={{marginTop:350}}/>}
				{!isLoading && <Text style={styles.txtLoading}>Loading...</Text>}
				{isLoading && (
					<Place navigation={navigation}/>
				)}
			</View>
		);
	} else {
		return (
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} route={route} />
				{!isLoading && <ActivityIndicator size="small" color="green" />}
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
