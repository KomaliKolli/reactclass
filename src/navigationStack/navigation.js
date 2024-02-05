

import { BrowserRouter,Route,Routes } from "react-router-dom"
import { AboutScreen } from "../screens/post-LoginScreens/aboutScreen"
import { HomeScreen } from "../screens/post-LoginScreens/homeScren"
import { ProductScreen } from "../screens/post-LoginScreens/productsScreen"
import { SettingScreen } from "../screens/post-LoginScreens/settingScreen"
import Navbar from "../Navbar/navbar"
import {  ProductDetails } from "../screens/post-LoginScreens/productDetails"
import { createContext, useState } from "react"
import InvalidScreen from "../screens/invalidScreen"
import { PostLogin } from "./postLoginRoutes"
import PreLogin from "./preLoginRoutes"
import { LoginScreen } from "../screens/preLoginScreens/loginScreen"


export const DataShare = createContext()
export const NavigationStack=()=>{



    const [name,setName]=useState("10kCoders")
    const [darkTheme,setDarkTheme]=useState(false)
    const [login,setLogin]=useState(false)

    // to change local state
    const changeTheme=()=>{
        setDarkTheme(!darkTheme)
    }
    const loginTrue=()=>{
        setLogin(true)
    }

    ///
    return(
        <DataShare.Provider value={{name,darkTheme,changeTheme,loginTrue}}>
        <BrowserRouter>
        {/* <Routes>
        <Route path="/" Component={Navbar} />
        <Route path="/about" Component={AboutScreen}    />
        <Route path="/home" Component={HomeScreen}   />
        <Route path="/product" Component={ProductScreen}    />
        <Route path="/setting" Component={SettingScreen}    />

        <Route path="/ProductDetails/:id" Component={ProductDetails}/>
        <Route path="*" Component={InvalidScreen}/>
            
        </Routes> */}
        {
            true ?
            <PostLogin/>
            :
            <PreLogin/>
        }






        </BrowserRouter>
        </DataShare.Provider>
    )
}