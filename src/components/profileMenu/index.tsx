import React, { useState, SyntheticEvent, ReactNode } from 'react';

import { TabContext, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';

import ChangePassword from './ChangePassword';
import PersonalInformation from './PersonalInformation';
import { StyledTabList } from './style';

type OptionType = {
	label: string;
	id: string;
	element: ReactNode;
};

const ProfileMenu = () => {
	const [value, setValue] = useState('1');

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const Options: OptionType[] = [
		{
			label: 'Personal information',
			id: '1',
			element: <PersonalInformation />,
		},
		{ label: 'Change password', id: '3', element: <ChangePassword /> },
	];

	return (
		<Box sx={{ pt: 3, minHeight: '475px' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1 }}>
					<StyledTabList onChange={handleChange}>
						{Options.map((el, index) => (
							<Tab key={index} label={el.label} value={el.id} />
						))}
					</StyledTabList>
				</Box>
				{Options.map((el, index) => (
					<TabPanel key={index} value={el.id}>
						{el.element}
					</TabPanel>
				))}
			</TabContext>
		</Box>
	);
};

export default ProfileMenu;
