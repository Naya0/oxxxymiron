import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import TourPage from "./Tour/TourPage";

const AppRoutes = () => {

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/tour" element={<TourPage />} />

        </Routes>
    )
}

export default AppRoutes;