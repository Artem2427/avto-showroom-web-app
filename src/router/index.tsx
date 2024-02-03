import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from '../components/layout';
import { RouteModel } from '../type';

import { ROUTES } from './routes';

const Router = () => {
	return (
		<Routes>
			{ROUTES.map((elem: RouteModel, index: number) => (
				<Route
					element={<Layout>{elem.element}</Layout>}
					key={index}
					path={elem.path}
				/>
			))}
		</Routes>
	);
};

export default Router;
