import React from 'react';

import AdminPanel from '@/pages/adminPanel';
import CarArticle from '@/pages/carActicle';
import EngineSettings from '@/pages/engineSettings';
import ModelSettings from '@/pages/modelSettings';
import Registration from '@/pages/registration';

import Pages from '../../constants/pages';
import Authorization from '../../pages/authorization';
import Catalog from '../../pages/catalog';
import Home from '../../pages/home';
import Profile from '../../pages/profile';
import { Routes } from '../../type';
import PrivateRoute from '../privatRoute';

export const ROUTES: Routes = [
	{ path: Pages.HOME, element: <Home /> },
	{ path: Pages.CATALOG, element: <Catalog /> },
	{ path: Pages.CARARTICLE, element: <CarArticle /> },
	{
		path: Pages.ADMIN_PANEL,
		element: (
			<PrivateRoute>
				<AdminPanel />
			</PrivateRoute>
		),
	},
	{ path: Pages.AUTORIZATION, element: <Authorization /> },
	{ path: Pages.REGISTRATION, element: <Registration /> },
	{ path: Pages.MODAL_SETTINGS, element: <ModelSettings /> },
	{ path: Pages.ENGINE_SETTINGS, element: <EngineSettings /> },
	{
		path: Pages.PROFILE,
		element: (
			<PrivateRoute>
				<Profile />
			</PrivateRoute>
		),
	},
];
