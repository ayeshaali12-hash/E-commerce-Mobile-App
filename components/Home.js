import { View, Image, StyleSheet, SafeAreaView, Platform, Pressable,TextInput, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {Lists, trending} from "./Categories"
import Trending from './Trending';
import { useState } from 'react';
// import React, {useEffect, useState} from 'react';


export default function Home() {
    // const [categories, setCategories] = useState([]);
    // const [item, setItem] = useState([
    //   {label: "Men's Clothing", value: "men's clothing"},
    //   {label: "Women's Clothing", value: "women's clothing"},
    //   {label: "kids", value: "kids"},
    //   {label: "Fragnance", value: "fragnance"},
    //   {label: "Accessories", value: "accessories"},
    // ])
    return(
      <SafeAreaView style={{paddingTop:Platform.OS==='android'?40:0,backgroundColor:"white", flex:1}}>
        <ScrollView>
          {/* search bar */}
        <View style={{backgroundColor:"#00CED1", padding:10, flexDirection:'row', alignItems:'center'}}>
          <Pressable style={{flexDirection:'row', alignItems:'center', marginHorizontal:7, gap:10, 
        backgroundColor:'white', borderRadius:3, height: 38, flex:1}}>
          <TextInput placeholder='Search' style={{padding:10}}></TextInput>
          </Pressable>
        </View>

        {/* category components */}
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Lists.map((item, index) =>(
            <View key={index} style={{margin:10, alignItems:"center"}}>
            <View style={{width:70, height:70, borderRadius: 50, overflow: "hidden"}}>
              <Image style={{width:70, height:70, resizeMode: "contain"}}
              source={{uri:item.image}}
              />
            </View>
          <Text style={{marginTop:5, textAlign:'center', fontSize:12, fontWeight:"500"}}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

            {/* trending */}
        <Text style={{padding:10, paddingLeft:20, fontSize:18, fontWeight:"bold"}}>Trending</Text>
        <Trending />


        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop: 40,
    },
  });
  
