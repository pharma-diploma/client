import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const {logout} = useAuth();
  const insets = useSafeAreaInsets();
  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: insets.top + 20 }}>
      <TouchableOpacity style={{backgroundColor: '#E2EDBE', padding: 15, borderRadius: 10, alignItems: 'center'}} onPress={() => handleLogout()}>
        <Text>log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
