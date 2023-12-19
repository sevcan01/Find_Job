import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";

const Layout = () => {
    const [fontLoaded]=useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        
    })

    const onLayoutRootView = useCallback(async()=>{
    if(fontLoaded){
    await SplashScreen.hideAsync()
    }
    },[fontLoaded])

    if(!fontLoaded) return null
return <Stack onLayout={onLayoutRootView}/>
}

export default Layout