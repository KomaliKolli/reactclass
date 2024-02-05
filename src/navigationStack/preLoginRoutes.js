import { Route, Routes } from "react-router-dom";
import InvalidScreen from "../screens/invalidScreen";
import { LoginScreen } from "../screens/preLoginScreens/loginScreen";




function PreLogin(){
    return(
        <Routes>
        <Route path="/" Component={LoginScreen}/>
        <Route path="*" Component={InvalidScreen}/>

        </Routes>
    )
}
export default PreLogin