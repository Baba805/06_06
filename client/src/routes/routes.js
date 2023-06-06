import AdminRooter from "../ADMINROOT/AdminRooter";
import Basket from "../MAINROOT/Basket";
import Home from "../MAINROOT/Home";
import Login from "../MAINROOT/Login";
import MainRooter from "../MAINROOT/MainRooter";
import Products from "../MAINROOT/Products";
import Register from "../MAINROOT/Register";
import BasketA from "../ADMINROOT/BasketA";
import HomeA from "../ADMINROOT/HomeA";
import LoginA from "../ADMINROOT/LoginA";
import ProductsA from "../ADMINROOT/ProductsA";
import RegisterA from "../ADMINROOT/RegisterA";




export const ROUTES = [
    {
        path : '/',
        element : <MainRooter/>,
        children : [
            {
                path : 'basket',
                element : <Basket/>
            },
            {
                path : 'home',
                element : <Home/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : 'products',
                element : <Products/>
            },
            {
                path : 'register',
                element : <Register/>
            }
        ]

    },
    {
        path : '/admin/',
        element : <AdminRooter/>,
        children : [
            {
                path : '/admin/basket',
                element : <BasketA/>
            },
            {
                path : '/admin/home',
                element : <HomeA/>
            },
            {
                path : '/admin/login',
                element : <LoginA/>
            },
            {
                path : '/admin/products',
                element : <ProductsA/>
            },
            // {
            //     path : '/admin/register',
            //     element : <RegisterA/>
            // }
        ]

    }
]