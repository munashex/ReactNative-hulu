import React from 'react';
import {ScrollView} from 'react-native';
import Marvel from './Marvel';
import MarvelStudio from './MarvelStudio';
 
function Movies() {
  return (
    <ScrollView>
    <MarvelStudio/>
       <Marvel/>
    </ScrollView>
  )
}

export default Movies