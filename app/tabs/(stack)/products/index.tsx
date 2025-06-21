import { products } from '@/store/products.store';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 p-2">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10 p-2">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <Link
                href={`/tabs/(stack)/products/${item.id}`}
                className="text-primary p-2"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default ProductsScreen;