import React from 'react';

import { Link } from 'react-router-dom';

import FormAuthorization from '@/components/formAuthorization';

import { H1, P, Span, Div, Text } from './style';

const Authorization = () => {
	return (
		<>
			<H1>Authorization</H1>
			<P>To get into your personal account, please enter the data below.</P>
			<FormAuthorization />
			<Div>
				<Text>
					If you dont have an account, you can
					<Link to="/registration">
						<Span>register</Span>
					</Link>
				</Text>
			</Div>
		</>
	);
};

export default Authorization;
