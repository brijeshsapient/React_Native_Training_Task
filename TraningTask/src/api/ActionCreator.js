import axios from 'axios';
import { fetchSuccess, fetchError } from "./Action";
import { setItem } from '../asyncStorage/localStorage';

const actionCreator = url => dispatch => {
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
        let tempList = dataFilter(response.data.list); 
        dispatch(fetchSuccess(tempList));
        setItem("data_list",JSON.stringify(tempList));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  });
};
export const dataFilter =(list)=>{
  let tempList = [];
  for(var i=0;i<list.length;i++)
            {  
                let currentKey  = list[i].dt_txt.split(' ');
                if(tempList.length==0){
                  tempList.push(list[i]);
                }else{
                  let prevKey = tempList[tempList.length-1].dt_txt.split(' ');
                  if(currentKey[0]!==prevKey[0]){
                      tempList.push(list[i]);
                  }
                }
            }
    return tempList;        
}
export default actionCreator;
