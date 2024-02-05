import { Route, Routes } from "react-router-dom"
import Navbar from "../Navbar/navbar"
import { AboutScreen } from "../screens/post-LoginScreens/aboutScreen"
import { HomeScreen } from "../screens/post-LoginScreens/homeScren"
import { ProductScreen } from "../screens/post-LoginScreens/productsScreen"
import { SettingScreen } from "../screens/post-LoginScreens/settingScreen"
import { ProductDetails } from "../screens/post-LoginScreens/productDetails"
import InvalidScreen from "../screens/invalidScreen"



export const PostLogin=()=>{
    return(
        <>
        <Routes>
        <Route path="/" Component={Navbar} />
        <Route path="/about" Component={AboutScreen}    />
        <Route path="/home" Component={HomeScreen}   />
        <Route path="/product" Component={ProductScreen}    />
        <Route path="/setting" Component={SettingScreen}    />

        <Route path="/ProductDetails/:id" Component={ProductDetails}/>
        <Route path="*" Component={InvalidScreen}/>

        </Routes>
            
        </>
    )
}