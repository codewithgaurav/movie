import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Switch, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Popular from "./components/Popular";
import New from "./components/New";
import MovieCard from "./components/MovieCard";
import MovieInformation from "./components/MovieInformation";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/popular",
        element: <Popular />
    },
    {
        path: "/new",
        element: <New />
    },
    {
        path: "/movie/:id",
        element: <MovieInformation />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


