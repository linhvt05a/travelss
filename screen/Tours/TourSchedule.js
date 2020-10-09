import React, {useEffect,useState} from 'react';
import { View, StyleSheet, ActivityIndicator, Image, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../component/Header/Header'

function TourSchedule({ navigation, route }) {
	const [isLoading,setLoading] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 6000);
	},[])
	if(route.params == undefined){
		return(
			<View style={{flex:1, marginTop: 400}}>
					<ActivityIndicator size="small" color="red"/>
					<Text style={styles.txtLoading}>Loading...</Text>
			</View>
		)
	}else{
		
		if(!isLoading){
			return(
				<View style={{flex:1, marginTop: 400}}>
					<ActivityIndicator size="small" color="red"/>
					<Text style={styles.txtLoading}>Loading...</Text>
			</View>
			)
		}else{
			const {tour_name, tour_image, tour_id} = route.params
			return(
				<ViewLoading tour_name={tour_name} tour_image={tour_image} navigation={navigation}/>
			)
		}
		return <></>
	}
	
}
function ViewLoading ({tour_name, tour_image, navigation}){
	return(
		<View style={styles.container}>
			<View style={styles.viewImg}>
				<ImageBackground source={{ uri: tour_image }} style={styles.imageBg}>
					<TouchableOpacity style={styles.imgArrow} onPress={()=> navigation.goBack()}>
						<Image source={require('../../component/IconApp/left_arrow.png')} />
					</TouchableOpacity>
				</ImageBackground>
				<Text style={styles.schedule_txt}>{tour_name}</Text>
			</View>
			<View>
				<Text style={styles.schedule_txt_detail}>Chi tiet lich trinh đi Đà Lạt từ ngày 20/10 - 23/10</Text>
			</View>
			<ScrollView>
				<Schedule />	
				<RelatedPalace/>
			</ScrollView>
		</View>
	)
}
function Schedule({}) {
	return (
	
			<View style={styles.schedule_container}>
			<View style={styles.schedule_main}>
				<View style={styles.circle} />
				<View style={styles.schedule_view} />
				<View style={styles.circle} />
				<View style={styles.schedule_view} />
				<View style={styles.circle} />
				<View style={styles.schedule_view} />
				<View style={styles.circle} />
			</View>
			<View style={{marginTop:5}}>
				<Text style={styles.txtStyle}>07h30-20/10:Khởi hành từ Bxe MD Hồ Chí Minh</Text>
				<View>
					<Text>07h30 - 07h45: </Text>
					<Text>07h45 - 08h00:</Text>
					<Text>08h00 - 08h30: </Text>
					<Text>08h30 - 09h00:</Text>
				</View>

				<Text style={styles.txtStyle}>22h00-21/10: Tham quan con duong dat set </Text>
				<View>
					<Text>07h30 - 07h45: </Text>
					<Text>07h45 - 08h00:</Text>
					<Text>08h00 - 08h30: </Text>
					<Text>08h30 - 09h00:</Text>
				</View>

				<Text style={styles.txtStyle}>07h30-22/10: Tham quan ga da lat, vuon hoa TP </Text>
				<View>
					<Text>07h30 - 07h45: </Text>
					<Text>07h45 - 08h00:</Text>
					<Text>08h00 - 08h30: </Text>
					<Text>08h30 - 09h00:</Text>
				</View>
				<Text style={styles.txtStyle}>07h30: Ngày 23/10 khởi hành đón khách tại 3 địa điểm:</Text>
			</View>
		</View>
	);
}
function RelatedPalace(){
	return(
		<View style={styles.related_palace}>
			<Text style={styles.related_txt}>Địa điểm liên quan </Text>

			<Text style={styles.related_txt}>Nhà hàng</Text>

			<Text style={styles.related_txt}>Đồ lưu niệm</Text>

			<Text style={styles.related_txt}>Hotel</Text>

			<Text style={styles.related_txt}>HomeStay</Text>

			<Text style={styles.related_txt}>Quán ăn vỉa hè</Text>

			<Text style={styles.related_txt}>Cho thuê xe máy - ô tô</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageBg: {
		flex: 1,
	},
	viewImg: {
		height: 300,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.2
	},
	schedule_txt: {
		fontSize: 20,
		padding: 10,
		color: '#ff5e00'
	},
	schedule_view: {
		height:72,
		width: 2,
		backgroundColor: '#ff5e00',
		marginLeft: 3,
		marginTop: 2,
		marginBottom: 2
	},
	circle: {
		width: 10,
		height: 10,
		backgroundColor: 'green',
		borderRadius: 5,
		flex: 0,
		flexDirection: 'row'
	},
	schedule_main: {
		flexDirection: 'column',
		padding: 10
	},
	schedule_txt_detail: {
		fontSize: 16,
		marginTop: 10,
		marginLeft: 10
	},
	schedule_container: {
		flexDirection: 'row',
	},
	txtStyle:{
		fontWeight:'bold',
		color:'#ff5e00'
	},
	related_palace:{
		flex:1, 
		paddingLeft:10
	},
	related_txt:{
		fontSize: 18, 
		fontWeight:'bold',
		color:'#ff5e00'
	},
	txtLoading:{
		marginLeft: 180,
		marginTop: 20
	  },
	  imgArrow:{
		  width:16,
		  height:16,
		  position:'absolute',
		  marginTop: 35,
		  marginLeft:20, 
	  }
});

export default TourSchedule;
