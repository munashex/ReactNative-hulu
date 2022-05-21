import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import topMovieData from './TopMovieData'

const Item = ({image, name, category, rating}) => {
    return (
        <View>
            <TouchableOpacity>
            <Image source={{uri: image}} 
                style={{
                    height: 220,
                    width: 300,
                    margin: 5,
                    zIndex: 1

                }}
            />
            <View style={{zIndex: 2, position: "absolute", marginTop: 175}}>
            <Text  style={{color: "#f5f5f5", fontSize: 18, marginLeft: 10, fontWeight: "bold",}}>{name}</Text>
            <Text style={{color: "#f5f5f9", marginLeft: 12, fontWeight: "500", marginTop: 4}}>{category}</Text>
            <Text style={{marginLeft: 210, color:"#f5f5f5", marginTop: -19, fontWeight: "500"}}>{rating}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

const renderItem = ({item}) => {
    return (
        <Item image={item.image} name={item.name} category={item.category} rating={item.rating}/>
    )
}


function TopMovies() {
  return (
    <View>
    <FlatList 
        horizontal
        data={topMovieData}
        renderItem={renderItem}
    />
       
    </View>
  )
}

export default TopMovies