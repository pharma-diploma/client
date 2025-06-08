import { FlatList, StyleSheet, Text, View } from 'react-native';

import CartItemCard from '@/components/cards/CartItemCard';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { useFocusEffect } from 'expo-router';
import React from 'react';

export default function CartScreen() {
  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [cart, setCart] = React.useState<any[]>([]);


  const fetchCart = async () => {
    if (!user?._id) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/cart/${user._id}`);
      if (!res.ok) throw new Error('Не вдалося завантажити корзину');
      const data = await res.json();
      console.log(data);
      setCart(data.items || []);
    } catch (e) {
      setError('Не вдалося завантажити корзину');
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
        React.useCallback(() => {
            fetchCart();
        }, [user?._id])
      );
  
  return (
     <View style={{backgroundColor: "white", flex: 1}}>
        <Header
            title="Кошик"
            titleStyle={{
                fontWeight: 700,}}
        />
      <View style={{paddingTop: 100, paddingHorizontal: 20}}>
            
            {loading && <Text>Завантаження...</Text>}
            {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
            {!loading && !error && cart.length === 0 && (
              <Text>Корзина порожня</Text>
            )}
            <FlatList
              data={cart}
              keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
              contentContainerStyle={{gap: 10}}
              renderItem={({ item }) => (
                <CartItemCard
                    key={item._id}
                    _id={item._id}
                    name={item.product.name}
                    price={item.price}
                    image={item.product.image}
                  />
              )}
            />
      </View>
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
