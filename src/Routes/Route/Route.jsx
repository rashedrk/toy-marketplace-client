import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AddToy from "../../Pages/AddToy/AddToy";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllToys from "../../Pages/AllToys/AllToys";
import ToyDetails from "../../Pages/ToyDetails/ToyDetails";
import MyToys from "../../Pages/MyToys/MyToys";

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
                element: <AddToy/>
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
                element: <AllToys/>,
                loader: () => fetch('https://toy-marketplace-server-orpin.vercel.app/toys')
            },
            {
                path: 'toys/:id',
                element: <ToyDetails/>,
                loader: ({params}) => fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/${params.id}`)
            },
            {
                path: 'toys/my',
                element: <MyToys/>,
                
            }
        ]
    },
]);

export default router;