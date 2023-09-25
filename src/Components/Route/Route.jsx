import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import CardDetails from "../CardDetails/CardDetails";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/fakeData.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/details/:id",
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/fakeData.json')
            }
        ]
    }
])

export default myCreatedRoute;