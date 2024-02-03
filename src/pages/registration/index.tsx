import React from 'react';

import { Link } from 'react-router-dom';

import FormRegistration from '@/components/formRegistration';

import { H1, Text, Span } from './style';

const Registration = () => {
	return (
		<>
			<H1>Registration</H1>
			<FormRegistration />
			<Text>
				Return to
				<Link to="/authorization">
					<Span>login page</Span>
				</Link>
			</Text>
		</>
	);
};

export default Registration;
