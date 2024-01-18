import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Text, TextInput, Checkbox} from 'react-native-paper';
import Search from './Search';

export default function Account() {

    return(
      <View>
        
        <Text>Hello this is Account page</Text>
        <Search />

      </View>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop: 40,
    },
  });
  
