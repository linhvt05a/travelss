import React, { useState, useEffect } from 'react';
import { View, Text,StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../../component/Header/Header';
import {Place, TourList} from './index'
import {LoadingView} from '../../component/ActivityIndicator/index'

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
				<LoadingView label="Loading..." color="red" size="small" />
				{isLoading && (
					<Place navigation={navigation}/>
				)}
			</View>
		);
	} else {
		return (
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} route={route}/>
				<LoadingView label="Loading..." color="red" size="small" />
				{isLoading && (
					<TourList />
				)}
			</View>
		);
	}
}

export default Tours;
