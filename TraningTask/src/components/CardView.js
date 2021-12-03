import React from "react";
import { View,StyleSheet,Text,Image } from 'react-native'

const CardView = ({item})=>{
    return(<View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:45,color:'#000',fontWeight:'bold'}}>
                        {item.main.temp}
                    </Text>
                    <Text style={{color:"#82CAFF" ,fontSize:24}}>o</Text>
                </View>
                <Text style={{fontSize:24,color:'#C34A2C'}}>
                    {item.weather[0].main}
                </Text>
                <Text style={{fontSize:24,color:'#54C571'}}>
                    {item.weather[0].description}
                </Text>
            </View>
            <View style={styles.subContainer}>
            <Image
                style={{height:100,width:100}}
                source={{ uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png` }}/>
            </View>
            <View style={styles.subContainer}>
                <Text style={{fontSize:18,color:'#54C571'}}>{item.dt_txt.split(' ')[0]}</Text>
                <Text style={{fontSize:18,color:'#54C571'}}>Humidity:{item.main.humidity}</Text>
                <Text style={{fontSize:18,color:'#54C571'}}>Wind Speed:{item.wind.speed}</Text>  
            </View>
    </View>);
};

export default CardView;

const styles = StyleSheet.create({
    container:{
        width:'97%',
        height:180,
        flex:3,
        flexDirection:'row',
        borderRadius:10,
        borderWidth:1,
        margin:5,
        borderColor:'#F0EEEE',
        backgroundColor:'#D3D3D3'
    },
    subContainer:{
        flex:1,
        justifyContent:'space-around',
        marginStart:5
    }
})