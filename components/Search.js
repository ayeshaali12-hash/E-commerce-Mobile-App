import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import { View, Image, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';
import {  } from 'react-native-gesture-handler';
import { Button, Text , Checkbox} from 'react-native-paper';
import { useSelector } from 'react-redux';

export default function Search() {
  const productss = useSelector((state)=>state.product.data);
    // console.log(productss);
  const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [oldData, setOldData] = useState(productss);
    const [searchList, setSearchList] = useState(oldData);
    const filterData = txt =>{
        let newData = oldData.filter(item =>{
            return item.name.toLowerCase().match(txt.toLowerCase());
        });
        // console.log(newData);
        setSearchList(newData);
    };

    return(
      <SafeAreaView>
          <View style={{height:60}}>
            <View style={styles.searchView}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image 
                source={{uri:"https://cdn-icons-png.flaticon.com/256/49/49116.png"}} 
                style={styles.icon}></Image>
                <TextInput 
                value={search}
                onChangeText={txt=>{
                    setSearch(txt);
                    filterData(txt);
                }}
                placeholder='Search here...' style={styles.serachInput}></TextInput>
                </View>
              
                {/* cross icon */}
                {search!=='' && (
                    <TouchableOpacity 
                    style={[styles.icon,{ justifyContent:"center", alignItems:"center"}]}
                    onPress={()=>{
                      setSearch('');
                      filterData('');
                    }}>
                        <Image source={{uri:"https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"}} 
                    style={styles.icon}></Image>
                    </TouchableOpacity>
                )}
            </View>
            </View>
            <ScrollView>

        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchView:{
      width: '90%',
      height: 50,
      borderRadius: 20,
      borderWidth:0.5,
      alignSelf: 'center',
      marginTop: 0,
      flexDirection:'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      alignItems:'center'
  }, 
  icon:{
      width:24,
      height:24,
      resizeMode:'center',
  }, 
  serachInput:{
      width:'80%', 
      marginLeft: 10
  }
});


  
