
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from "react-redux";
import apiCall from "../api/ActionCreator";
import CardView from '../components/CardView';
import SearchBar from "../components/SearchBar";
import Constant from "../constant/Constant";
import { getItem  } from '../asyncStorage/localStorage';

const SearchScreen = (props) =>  {
    const[term,setTerm] = useState('');
    const[list,setList] = useState([]);

    useEffect(() => {
      const fetchData = async ()=> {
        const weatherData = await getItem('data_list');
        const parseData = JSON.parse(weatherData);
        if(parseData!=null){
          setList(parseData);
        }
      };
      fetchData();
    },[]);

    const searchApi= async (term)=>{
      if(term.length==6){
        const res = await props
            .apiCall(Constant.BaseUrl+term+Constant.RestOfUrl)
      }else{
        alert('Please enter valid zip code');
      }      
    }
    return(
        <View style={{ flex: 1, backgroundColor: 'white',flexDirection:'column' }}>
          <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
          /> 
          {
            props.data? <FlatList
            data={props.data}
            renderItem={({ item }) => 
              <CardView item={item}/>  
          }
            keyExtractor={(item, index) => index.toString()}
          />:
          <FlatList
              testID="flat-list"
              data={list}
              renderItem={({ item }) => 
                <CardView testID={'item'}  item={item}/>}
              keyExtractor={(item, index) => index.toString()}
            />
          } 
        </View>
      );
  };
  
  const mapDispatchToProps = dispatch => ({
    apiCall: url => dispatch(apiCall(url))
  });
  
  const mapStateToProps = state => ({
    data: state.apiReducer.data,
    error: state.apiReducer.error,
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchScreen);