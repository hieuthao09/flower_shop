import HomePage from "./pages/users/homePage";
import ProfilePage from "./pages/users/profilePage";
import MaterLayout from "./pages/users/theme/masterLayout";
import { ROUTERS } from "./utils/router";
import { Routes, Route } from 'react-router'
const renderUserRouter = () =>{
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
    ]
    return(
    <MaterLayout>
        <Routes>
            {
                userRouters.map((item, key) => (<Route key={key} path={item.path} element={item.component} />))
            }
        </Routes>
    </MaterLayout>
    );
};
const RouterCustom = ()  =>{
    return renderUserRouter();
}

export default RouterCustom;