import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import New from "./components/New";
import Articles from "./components/Articles";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route exact path="/" element={<New />} />
                <Route path="articles" element={<Articles />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;