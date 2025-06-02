import SearchButton from '@/components/ui/SearchButton';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  const [pharmacies, setPharmacies] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pharmacies`);
        const data = await res.json();
        console.log(data);
        setPharmacies(data);
      } catch (e) {
        // обработка ошибки
        setPharmacies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPharmacies();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.464717,
          longitude: 35.046183,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
      >
        {!loading && pharmacies.map(pharmacy => (
          <Marker
            key={pharmacy._id}
            coordinate={{
              latitude: pharmacy.coordinates.lat,
              longitude: pharmacy.coordinates.lng,
            }}
            title={pharmacy.name}
            image={{ uri: pharmacy.image }}
            onPress={() => router.push(`/pharmacy/${pharmacy._id}`)}
          />
        ))}
      </MapView>
      <SearchButton
        activeOpacity={0.9}
        onPress={() => router.push('/search')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
