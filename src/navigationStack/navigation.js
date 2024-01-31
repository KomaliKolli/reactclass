

import { BrowserRouter,Route,Routes } from "react-router-dom"
import { AboutScreen } from "../screens/post-LoginScreens/aboutScreen"
import { HomeScreen } from "../screens/post-LoginScreens/homeScren"
import { ProductScreen } from "../screens/post-LoginScreens/productsScreen"
import { SettingScreen } from "../screens/post-LoginScreens/settingScreen"
import Navbar from "../Navbar/navbar"

export const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" Component={Navbar} />
        <Route path="/about" Component={AboutScreen}    />
        <Route path="/home" Component={HomeScreen}   />
        <Route path="/product" Component={ProductScreen}    />
        <Route path="/setting" Component={SettingScreen}    />
            
        </Routes>






        </BrowserRouter>
    )
}