import React,{useState} from 'react'
import { Image,ActivityIndicator,ImageBackground, StyleSheet, FlatList, TouchableOpacity,Text, View} from 'react-native'
import Header from '../../component/Header/Header'


const GridListItems = [
    {id: 1,title:"VINH HA LONG", image:"https://photo-1-baomoi.zadn.vn/w1000_r1/2019_01_16_20_29366382/551ec5162556cc089547.jpg"},
    {id: 2,title:"DA NANG", image:"https://www.tugo.com.vn/wp-content/uploads/7d-18903675-4265-4c48-a6dd-e1c2d13bb7e2.jpg"},
    {id: 3,title:"SA PA", image:"https://dulichkhampha24.com/wp-content/uploads/2019/08/nen-du-lich-sapa-may-ngay-4.jpg"},
    {id: 5,title:"NINH THUAN", image:"https://wikidulich.org/wp-content/uploads/2019/04/photo-1-1551159212284697041904-crop-1551159236139755063457.jpg"},
    {id: 4,title:"MUI NE", image:"https://lh3.googleusercontent.com/proxy/8ty72lE2MfHm-TGGiI_HXfLfjq72ZU5E75AJeqIV6cwWbfYQXfoHaENTWb7OUzr-nZkzPnmXrARQz5IwzOwvKTK-TZBcdW6LkTZrh09fWRvwzSAFr5Onki8BY80koukQRiQ"},
    {id: 6,title:"NHA TRANG", image:"https://wiki-travel.com.vn/Uploads/picture/Viet_Dung-184602034655-nha-trang.jpg"},
    {id: 7,title:"VUNG TAU", image:"https://owa.bestprice.vn/images/hotels/large/marina-bay-vung-tau-resort-spa-5f20f94edbdc8-450x252.jpg"},
    {id: 8,title:"PHU QUOC", image:"https://media.congluan.vn/files/thanhduyen/2020/04/24/tour-phu-quoc-2-ngay-1-dem-800x500-1106.jpg"},
    {id: 9,title:"DA LAT", image:"https://owa.bestprice.vn/images/tours/large/kham-pha-da-lat-mong-mo-5e67489841e58-450x252.jpg"},
    {id: 10,title:"BEN TRE", image:"https://tour.dulichvietnam.com.vn/uploads/tour/du-lich-mien-tay.jpg.jpg"},
  
  ]

const Home = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(false)
  setTimeout(function(){setLoading(true)}, 6000)
    const renderItem = ({ item }) => (
        <View style={styles.GridViewContainer}>
           <Item data={item} navigation={navigation} route={route}/>
        </View> 
      );

    return (
       <View style={styles.container}>
         {isLoading && <Header navigation={navigation} route={route}/>}
          {!isLoading && <ActivityIndicator color="#f54242"/>}
          {!isLoading && <Text style={styles.txtLoading}>Loading...</Text>}
          {isLoading 
          && <FlatList
            data={GridListItems}
            renderItem={renderItem}
            keyExtractor = {(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator = {false}
            refreshing ={false}
            onRefresh={()=>console.log('dasdasdas')}
         />}
       </View>
    )
}

const Item = ({navigation,data, route}) => (
    <TouchableOpacity onPress={()=> { 
       navigation.navigate('Tours',{
        provinceID: data.id
      })}}>
        <ImageBackground source={{uri:data.image}} style={styles.image}>
              <Text style={styles.home_place_title}>{data.title}</Text>
        </ImageBackground>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    GridViewContainer: {
     padding: 5,
     paddingLeft: 10
  },
   image:{
     width: 190,
     height: 150,
    borderRadius: 20
   },
   header: {
     backgroundColor: 'red',
     height: 60,
     width : 414,
     paddingTop: 10
   },
   header_text : {
     color: 'white',
     fontSize :18,
     paddingTop: 20
   },
   txtLoading:{
     marginLeft: 180,
     marginTop: 20
   },
   home_place_title:{
     color: 'white',
     fontSize:16,
     fontWeight: 'bold',
     paddingTop: 130,
     paddingLeft: 10
   }
  });
export default Home
