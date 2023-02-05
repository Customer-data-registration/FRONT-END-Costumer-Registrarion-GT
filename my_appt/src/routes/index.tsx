import { Route, Routes, Navigate } from "react-router-dom";

import React from "react";

import LogIn from "../pages/SignIn";
import SignUp from "../Pages/SignUp";


function MainRoutes() {
	return (
		<div className="App">
			<Routes>
				<Route path="/LogIn" element={<LogIn />} />
				<Route path="*" element={<Navigate replace to={"/LogIn"} />} />
				<Route path="/SignUp" element={<SignUp/>} />
			</Routes>
		</div>
	);
}

export default MainRoutes;