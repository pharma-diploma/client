import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client'; // добавьте импорт

import BackIcon from '@/assets/svg/BackIcon';
import CurierIcon from '@/assets/svg/CurierIcon';
import Header from '@/components/Header';
import GradientButton from '@/components/ui/GradientButton';
import { useAuth } from '@/context/AuthContext';
import { router, useLocalSearchParams } from 'expo-router';
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Stage1 = (props: any) => (
  <Svg
    width={135}
    height={331}
    viewBox="0 0 135 331"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_7_1713)">
      <Rect
        x={4}
        y={327}
        width={323}
        height={127}
        rx={63.5}
        transform="rotate(-90 4 327)"
        fill="#F5F5F5"
      />
    </G>
    <Rect
      x={4}
      y={216}
      width={3}
      height={127}
      transform="rotate(-90 4 216)"
      fill="#7E7E7E"
    />
    <Rect
      x={4}
      y={109}
      width={3}
      height={127}
      transform="rotate(-90 4 109)"
      fill="#7E7E7E"
    />
    <Path
      d="M67.5 327C32.4299 327 4 298.57 4 263.5L4 216H131V263.5C131 298.57 102.57 327 67.5 327Z"
      fill="url(#paint0_linear_7_1713)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7_1713"
        x1={131}
        y1={216.128}
        x2={16.5901}
        y2={338.63}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC812" />
        <Stop offset={1} stopColor="#FF4747" />
      </LinearGradient>
    </Defs>
  </Svg>
);
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Stage2 = (props: any) => (
  <Svg
    width={135}
    height={331}
    viewBox="0 0 135 331"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_34_32)">
      <Rect
        x={4}
        y={327}
        width={323}
        height={127}
        rx={63.5}
        transform="rotate(-90 4 327)"
        fill="#F5F5F5"
      />
    </G>
    <Rect
      x={4}
      y={216}
      width={3}
      height={127}
      transform="rotate(-90 4 216)"
      fill="#7E7E7E"
    />
    <Rect
      x={4}
      y={109}
      width={3}
      height={127}
      transform="rotate(-90 4 109)"
      fill="#7E7E7E"
    />
    <Path
      d="M67.5 327C32.4299 327 4 298.57 4 263.5L4 216H131V263.5C131 298.57 102.57 327 67.5 327Z"
      fill="url(#paint0_linear_34_32)"
    />
    <Path d="M4 213L4 109H131V213H4Z" fill="url(#paint1_linear_34_32)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_34_32"
        x1={131}
        y1={216.128}
        x2={16.5901}
        y2={338.63}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC812" />
        <Stop offset={1} stopColor="#FF4747" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_34_32"
        x1={131}
        y1={109.12}
        x2={24.5048}
        y2={230.823}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6DFF12" />
        <Stop offset={1} stopColor="#47C8FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Stage3 = (props: any) => (
  <Svg
    width={135}
    height={331}
    viewBox="0 0 135 331"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_34_59)">
      <Rect
        x={4}
        y={327}
        width={323}
        height={127}
        rx={63.5}
        transform="rotate(-90 4 327)"
        fill="#F5F5F5"
      />
    </G>
    <Rect
      x={4}
      y={216}
      width={3}
      height={127}
      transform="rotate(-90 4 216)"
      fill="#7E7E7E"
    />
    <Rect
      x={4}
      y={109}
      width={3}
      height={127}
      transform="rotate(-90 4 109)"
      fill="#7E7E7E"
    />
    <Path
      d="M67.5 327C32.4299 327 4 298.57 4 263.5L4 216H131V263.5C131 298.57 102.57 327 67.5 327Z"
      fill="url(#paint0_linear_34_59)"
    />
    <Path
      d="M67.5 4C32.4299 4 4 32.4299 4 67.5L4 106H131V67.5C131 32.4299 102.57 4 67.5 4Z"
      fill="url(#paint1_linear_34_59)"
    />
    <Path d="M4 213L4 109H131V213H4Z" fill="url(#paint2_linear_34_59)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_34_59"
        x1={131}
        y1={216.128}
        x2={16.5901}
        y2={338.63}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC812" />
        <Stop offset={1} stopColor="#FF4747" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_34_59"
        x1={131}
        y1={105.882}
        x2={26.8408}
        y2={-15.4847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#BC12FF" />
        <Stop offset={1} stopColor="#FF474A" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_34_59"
        x1={131}
        y1={109.12}
        x2={24.5048}
        y2={230.823}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6DFF12" />
        <Stop offset={1} stopColor="#47C8FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);



export default function CartScreen() {
  const { user } = useAuth();
  const [stage, setStage] = React.useState(1);
  const [orderStatus, setOrderStatus] = React.useState('');
  const { data } = useLocalSearchParams();
  const parsedData = JSON.parse(data as string);
  console.log(parsedData);
  const orderId = parsedData.orderId;
  useEffect(() => {
    // Подключение к сокету
    const socket = io(process.env.EXPO_PUBLIC_API_URL);
    socket.emit("join", user?._id);
    // Слушаем событие обновления статуса заказа
    socket.on('orderStatusChanged', (data) => {
      console.log("Order status changed:", data);
      if (data.orderId === orderId) {
        setOrderStatus(data.status);
        // Пример: меняем stage в зависимости от статуса
        if (data.status === 'pending') setStage(1);
        if (data.status === 'taking') setStage(2);
        if (data.status === 'delivery') setStage(3);
        if (data.status === 'finish') {
          // Здесь можно добавить логику для завершения заказа, например, показать уведомление
          console.log("Order finished");
          router.replace("/");
        };
      }
    });

    // Очистка слушателя при размонтировании
    return () => {
      socket.off('orderStatusChanged');
      socket.disconnect();
    };
  }, []);

  return (
     <View style={{backgroundColor: "white", flex: 1}}>
        <Header
            title="Статус"
            titleStyle={{
                fontWeight: 700,}}
            leftContent={<BackIcon />}
            onLeftPress={() => router.back()}
        />
      <View style={{paddingTop: 100, paddingHorizontal: 20}}>
            <Text style={{marginTop: 30, fontWeight: 700, textAlign: "center", color: "#A7A7A7"}}>Час очікування</Text>
            <Text style={{marginBottom: 30, fontWeight: 700, textAlign: "center", color: "#000"}}>14:35-14:50</Text>

            {
                stage === 1 && <Stage1 style={{alignSelf: "center"}}/>
            }
            {
                stage === 2 && <Stage2 style={{alignSelf: "center"}}/>
            }
            {
                stage === 3 && <Stage3 style={{alignSelf: "center"}}/>
            }
            
            
            <Text style={{marginVertical: 30, width: "60%", alignSelf: "center", fontWeight: 700, textAlign: "center", fontSize: 20}}>
                {
                    stage === 1 && "Пошук кур’єра"
                }
                {
                    stage === 2 && "Кур’єр забирає замовлення"
                }
                {
                    stage === 3 && "Кур’єр доставляє замовлення"
                }
            </Text>
            
      </View>
      {
        stage === 1 &&
       <GradientButton title="Відхилити замовлення" style={{width: "95%", backgroundColor: "#E52020", position: "absolute", alignSelf: "center", bottom: 50}} onPress={() => router.back()}/>
      }
      {
        stage === 2 && (
            <View style={{
                paddingHorizontal: 20,
            }}>
            <Text style={{
                fontWeight: 700,
                fontSize: 28,
                

            }}>Ваш кур’єр</Text>
            <View style={{
                backgroundColor: "white",
                elevation: 2,
                borderRadius: 12,
            }}>
                <CurierIcon/>
            </View>
            </View>
        )
      }
      {
        stage === 3 && (
            <View style={{
                paddingHorizontal: 20,
            }}>
            <Text style={{
                fontWeight: 700,
                fontSize: 28,
                

            }}>Ваш кур’єр</Text>
            <View style={{
                backgroundColor: "white",
                elevation: 2,
                borderRadius: 12,
            }}>
                <CurierIcon/>
            </View>
            </View>
        )
      }
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
