import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import GradientButton from '../ui/GradientButton';

interface ProductCardProps {
    _id: string;
    name: string;
    image: string;
    price: number;
    description?: string;
}


const ProductCard = ({_id, name, image, price, description}: ProductCardProps) => {
  return (
    <View style={{
        backgroundColor: "white", 
        padding: 16,
        paddingVertical: 11,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
      <View style={{flexDirection: "row", gap: 14,  maxWidth: '70%'}}>
        <Image 
          source={{ uri: image }} 
          style={{ width: 60, height: 60, borderRadius: 12 }}
        />
        <View style={{justifyContent: 'space-between'}}>
            <Text style={{
                fontSize: 16,
                fontWeight: '500',
            }}>{name}</Text>
            <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 500,
                }}>
                    від
                </Text>
                <View>
                    <MaskedView maskElement={
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'black', // цвет не важен, главное чтобы был
                        }}>
                        {price}₴
                        </Text>
                    }>
                        <LinearGradient
                            colors={['#FF4747', '#FFC812']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '500',
                            opacity: 0, // текст невидим, используется только маска
                        }}>
                            {price}₴
                        </Text>
                        </LinearGradient>
                    </MaskedView>
                </View>
            </View>
        </View>
      </View>
      <GradientButton
        title="У кошик"
        onPress={() => console.log(`Navigate to product ${_id}`)}
        style={{ height: 34, padding: 0, width: 112 }}
        textStyle={{ fontSize: 14, fontWeight: '500' }}
      />
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({})