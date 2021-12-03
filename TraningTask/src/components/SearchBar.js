import React from "react";
import {View , StyleSheet, TextInput,Image, TouchableOpacity} from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit })=>{
    return (<View style={styles.backgroundStyle}>
        <View style={{flex:8}}>  
            <TextInput placeholder='Search' style={{fontSize:18,marginStart:5}}
                autoCapitalize='none'
                testID={'input'}
                autoCorrect={false}
                placeholder="Enter the zip code"
                keyboardType="numeric"
                value={term}
                maxLength={6}
                onChangeText={newTerm=>onTermChange(newTerm)}
            />
        </View>
        <View style={{alignSelf:'center',marginHorizontal:15,flex:1}}>
            <TouchableOpacity testID={'search'} onPress={()=>{onTermSubmit(term)}}>
                <Image
                    style={{height:30,width:30}}
                    source={require("../assets/search.png")}/>
            </TouchableOpacity>        
        </View> 
    </View>);
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius:10,
        margin:15,
        flexDirection:'row',
    },

});
export default SearchBar;