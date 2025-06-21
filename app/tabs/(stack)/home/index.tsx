import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-4"
          color="primary"
          onPress={() => router.push('/tabs/products')}
        >
          Productos
        </CustomButton>

        <CustomButton
          onPress={() => router.push('/tabs/profile')}
          className="mb-4"
          color="secondary"
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push('/tabs/settings')}
          className="mb-4"
          color="tertiary"
        >
          Ajustes
        </CustomButton>

        <Link href="/tabs/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        {/* <Link className="mb-5" href="/products">
          Productos{' '}
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil{' '}
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes{' '}
        </Link> */}
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;