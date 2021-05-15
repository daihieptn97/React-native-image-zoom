/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useRef } from "react";
import { Animated, Dimensions, View } from "react-native";
import { PinchGestureHandler, State, PanGestureHandler } from "react-native-gesture-handler";
import PinchableBox from "./PinchableBox";

const { width } = Dimensions.get("window");
let endScale = 1;

const App = () => {
  let scale = useRef(new Animated.Value(1)).current;
  let translateX = useRef(new Animated.Value(1)).current;
  let translateY = useRef(new Animated.Value(1)).current;
  // console.log(scale);

  const onZoomEvent = Animated.event([{
    nativeEvent: {
      translationX: translateX,
      translationY: translateY,
      scale: scale,
    },
  }], { useNativeDriver: true });

  const onZoomStateChange = event => {
    // console.log("onZoomStateChange", event, State);
    if (event.nativeEvent.oldState === State.ACTIVE) {
      console.log(event.nativeEvent);
      // Animated.spring(scale, {
      //   toValue: 1,
      //   useNativeDriver: true,
      // }).start();
      scale = event.nativeEvent.scale;
      // endScale = event.nativeEvent.scale;
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/*<PinchGestureHandler*/}
      {/*  onGestureEvent={onZoomEvent}*/}
      {/*  onHandlerStateChange={onZoomStateChange}*/}
      {/*  scale={(e) => console.log(e)}*/}
      {/*>*/}
      {/*  <Animated.Image*/}
      {/*    source={{*/}
      {/*      uri:*/}
      {/*        "https://blog.crowdbotics.com/content/images/2020/04/React-Native-Featured-Image.png",*/}
      {/*    }}*/}
      {/*    style={{*/}
      {/*      width: width,*/}
      {/*      height: 300,*/}
      {/*      transform: [{*/}
      {/*        scale: scale,*/}
      {/*      },*/}
      {/*        {*/}
      {/*          translateY: translateY,*/}
      {/*        },*/}
      {/*        {*/}
      {/*          translateX: translateX,*/}
      {/*        }*/}
      {/*        ],*/}
      {/*    }}*/}
      {/*    resizeMode="contain"*/}
      {/*  />*/}
      {/*</PinchGestureHandler>*/}

      <PinchableBox image={"https://blog.crowdbotics.com/content/images/2020/04/React-Native-Featured-Image.png"}
      />
    </View>
  );
};

export default App;
