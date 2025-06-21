import { Redirect } from 'expo-router';
import React from 'react';

//En NEXT JS y expo router, los archivos dentro la carpeta app son las pantallas

const App = () => {
   return <Redirect href="/tabs" />;
  // return (
  //   <SafeAreaView>
  //     <View className="mt-5 mx-3">
  //     <Text className="text-3xl" style= {{fontFamily : 'WorkSans-Black'}}>Hola Mundo</Text>
  //     <Text className="text-3xl font-work-black text-primary">Hola Mundo</Text>
  //     <Text className="text-3xl font-work-light">Hola Mundo</Text>
  //     <Text className="text-3xl font-work-medium">Hola Mundo</Text>
  //   </View>
  //   </SafeAreaView>
  // )
}

export default App;