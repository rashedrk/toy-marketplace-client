import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AddToy from "../../Pages/AddToy/AddToy";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllToys from "../../Pages/AllToys/AllToys";

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
                path: 'allToys',
                element: <AllToys/>,
                loader: () => fetch('https://toy-marketplace-server-orpin.vercel.app/toys')
            }
        ]
    },
]);

export default router;