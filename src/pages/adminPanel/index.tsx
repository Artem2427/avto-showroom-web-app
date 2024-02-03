import React from 'react';

import { Tab, Box } from '@mui/material';

import BrandSettings from '@/components/brand/brandSettings';
import Feedback from '@/components/feedbackTable';
import Users from '@/components/userTable';
import { TabPanelProps } from '@/type';

import CarSettings from '../../components/car/carSettings';
import ColorSettings from '../../components/color/colorSettings';

import { TabsContainer } from './style';

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			aria-labelledby={`simple-tab-${index}`}
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			role="tabpanel"
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
};

const tabProps = (index: number) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
};

const AdminPanel = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ maxWidth: { xs: '100%', sm: '100%' } }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<TabsContainer onChange={handleChange} value={value}>
					<Tab label="Cars" {...tabProps(0)} />
					<Tab label="Brands" {...tabProps(1)} />
					<Tab label="Colors" {...tabProps(2)} />
					<Tab label="Users" {...tabProps(3)} />
					<Tab label="Feedback" {...tabProps(4)} />
				</TabsContainer>
			</Box>
			<TabPanel index={0} value={value}>
				<CarSettings />
			</TabPanel>
			<TabPanel index={1} value={value}>
				<BrandSettings />
			</TabPanel>
			<TabPanel index={2} value={value}>
				<ColorSettings />
			</TabPanel>
			<TabPanel index={3} value={value}>
				<Users />
			</TabPanel>
			<TabPanel index={4} value={value}>
				<Feedback />
			</TabPanel>
		</Box>
	);
};

export default AdminPanel;
