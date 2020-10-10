import React, { useState, useEffect } from 'react';
import { View, Text, Image,FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import  {currencyFormat} from '../../component/Convert/Convert'

function Place({navigation}) {
    const [ strSearch, setSearch ] = useState('');
    const[data, setData] = useState([  
        {
        id:1, 
        tour_name:'Du lịch Miền Trung - Nha Trang - Đà Lạt mùa Thu 5 ngày khởi hành từ Sài Gòn', 
        tour_image:'https://www.dalattrip.com/dulich/media/2017/12/thanh-pho-da-lat.jpg', 
        time_duration:"5 ngày 4 đêm",
        time_in_week:"Thứ 4 hàng tuần",
        price:2900000,
        price_offer:3000000
    },
        {
        id:2, 
        tour_name:'Du lịch Đà Lạt tham quan trang trại rau và hoa 3 ngày từ Sài Gòn giá tốt 2020', 
        tour_image:'https://cdn.theculturetrip.com/wp-content/uploads/2017/10/shutterstock_634336823.jpg', 
        time_duration:"5 ngày 4 đêm",
        time_in_week:"Thứ 4 hàng tuần",
        price:2900000,
        price_offer:3000000
    },
        {id:3, 
        tour_name:'Du lịch Phú Quốc ngắm hoàng hôn tại Sunset Sanato 3N2Đ từ Sài Gòn 2020', 
        tour_image:'https://www.dalattrip.com/dulich/media/2017/12/thanh-pho-da-lat.jpg', 
        time_duration:"3 ngày 2 đêm",
        time_in_week:"15,22,29/10",
        price:0,
        price_offer:3199000
    },
        {id:4, tour_name:'Tour Phú Quốc - Tặng câu cá - Ngắm San Hô - Ngắm hoàng hôn tại Sunset Sanato từ Sài Gòn 2020', 
        tour_image:'https://cdn.theculturetrip.com/wp-content/uploads/2017/10/shutterstock_634336823.jpg', 
        time_duration:"3 ngày 2 đêm",
        time_in_week:"10,24/09; 07/10",
        price:0,
        price_offer:3000000
    },
        {id:5, tour_name:'Tour Hà Tiên - Phú Quốc: Bãi Sao - Vinpearland - Tặng câu cá, ngắm san hô mùa Thu từ Sài Gòn', 
        tour_image:'https://www.dalattrip.com/dulich/media/2017/12/thanh-pho-da-lat.jpg', 
        time_duration:"5 ngày 4 đêm",
        time_in_week:"Thứ 4 hàng tuần",
        price:2900000,
        price_offer:3000000
    },
        {id:6, tour_name:'Du lịch Free & Easy Nha Trang 3N2Đ từ Sài Gòn giá tốt 2020', 
        tour_image:'https://cdn.theculturetrip.com/wp-content/uploads/2017/10/shutterstock_634336823.jpg', 
        time_duration:"3 ngày 2 đêm",
        time_in_week:"01/9-30/9/2020",
        price:2900000,
        price_offer:4499000
    },
        {id:7, tour_name:'Tour du lịch Cam Ranh - Đảo Bình Ba 2N2Đ từ Sài Gòn 2020', 
        tour_image:'https://www.dalattrip.com/dulich/media/2017/12/thanh-pho-da-lat.jpg', 
        time_duration:"5 ngày 4 đêm",
        time_in_week:"Thứ 4 hàng tuần",
        price:2900000,
        price_offer:3000000
    },
        {id:8, tour_name:'Du lịch Nha Trang - Du ngoạn 4 đảo - Tháp Ponagar - Vinpearland - Nhà thờ đá từ Sài Gòn', 
        tour_image:'https://cdn.theculturetrip.com/wp-content/uploads/2017/10/shutterstock_634336823.jpg', 
        time_duration:"5 ngày 4 đêm",
        time_in_week:"Thứ 4 hàng tuần",
        price:2900000,
        price_offer:3000000
    }]);
    const onSearch = () => {
        if(strSearch !== ""){
            const txt = strSearch.trim().toLocaleUpperCase()
            const filter = data.filter(function (item) {
                return item.tour_name.toLocaleUpperCase().match(txt);
              });
              setData(filter)
        }
    };
    const renderItem = ({item}) =>(
            <View>
                <ItemList data={item} navigation={navigation}/>
            </View>
    )
    
	return (
		<View style={styles.tour_list_container}>
			<TextInput
				placeholder="Bạn muốn đến đâu ?"
				style={styles.tour_search_input}
                onChangeText={(text) => setSearch(text)}
                editable = {strSearch.length > 30 ? false: true}
                
			/>
                <TouchableOpacity style={styles.img_tour_search} onPress={onSearch}>
                <Image
                    source={require('../../component/IconApp/search16.png')}
                    
                />
                </TouchableOpacity>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor = {(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    onRefresh = {() => alert('dasdasdasd')}
                />
		</View>
	);
}
const ItemList = ({data,navigation}) =>{
    return (
        <View style={styles.itemList}>
           <View style={{flexDirection:'row'}}>
                <Image source={{uri:data.tour_image}} style={styles.tour_image}/>
                <View style={{flexDirection:'column', marginTop: 10, marginLeft:10}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Schedule',{
                        tour_id: data.id,
                        tour_image: data.tour_image,
                        tour_name: data.tour_name
                    })}>
                        <Text style={{width: 242, fontSize:14, fontWeight: 'bold'}}>{data.tour_name}</Text>
                    </TouchableOpacity>
                    <View style={{flex: 1, flexDirection:'row', marginTop:5}}>
                        <Image source={require('../../component/IconApp/clock.png')} width={16} height={16}/>
                        <Text style={{marginLeft: 3}}>{data.time_duration}</Text>
                        <Text style={{marginLeft: 33, color:'gray', textDecorationLine:'line-through'}}>{currencyFormat(data.price)}đ</Text>
                    </View>
                    <View style={{flex: 1, flexDirection:'row'}}>
                        <Image source={require('../../component/IconApp/calenda.png')} width={16} height={16}/>
                        <Text style={{marginLeft: 3, width: 105}}>{data.time_in_week}</Text>
                        <Text style={{marginLeft: 20, fontSize: 15, color: 'red', fontWeight: 'bold'}}>{currencyFormat(data.price_offer)}đ</Text>
                    </View>
                </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
	tour_list_container: {
        flex: 1,
        marginLeft: 19,
	},
	tour_search_input: {
		width: 382,
		height: 40,
		backgroundColor: 'white',
		marginTop: 20,
		paddingLeft: 10,
		borderRadius: 8,
        shadowRadius: 2, 
        borderWidth: 0.5,
        borderColor: '#ff720d',
        shadowOffset:{width: 0, height:2},
        shadowColor: "#000000",
        shadowOpacity:0.3
	},
	img_tour_search: {
		width: 20,
		height: 20,
		marginTop: 32,
        right: 35,
        position: 'absolute',
    },
    itemList:{
      left: 0,
      top: 10,
      backgroundColor: 'white',
      marginTop: 10,
      width: 382,
      height:120,
      shadowRadius: 3, 
      borderWidth: 1,
      borderRadius: 2,
      borderColor:'#ddd',
      shadowColor: '#000000',
      shadowOffset:{width: 0, height:3},
      shadowOpacity:0.3
    },
    tour_image:{
        width: 120,
        height: 100,
        borderRadius: 5,
        marginTop: 10,
        marginLeft:10
    }
});
export default Place;
