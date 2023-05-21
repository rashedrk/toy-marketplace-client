import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AddToy from "../../Pages/AddToy/AddToy";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllToys from "../../Pages/AllToys/AllToys";
import ToyDetails from "../../Pages/ToyDetails/ToyDetails";
import MyToys from "../../Pages/MyToys/MyToys/MyToys";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateToy from "../../Pages/UpdateToy/UpdateToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'toys/add',
                element: <PrivateRoute><AddToy/></PrivateRoute>
            },
            {
                path:'login',
                element: <Login/>
            },
            {
                path:'register',
                element: <Register/>
            },
            {
                path: 'toys',
                element: <AllToys/>
            },
            {
                path: 'toys/:id',
                element: <PrivateRoute><ToyDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/${params.id}`)
            },
            {
                path: 'toys/my',
                element: <PrivateRoute><MyToys/></PrivateRoute>,
                
            },
            {
                path: 'toy/update/:id',
                element: <PrivateRoute><UpdateToy/></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/${params.id}`)
            }
        ]
    },
]);

export default router;