import { Tabs } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const TabsContainer = styled(Tabs).attrs(() => ({
	sx: {
		'& .MuiTab-root.Mui-selected': {
			color: Palette.orange,
		},
		'& .MuiTabs-indicator': {
			backgroundColor: Palette.orange,
		},
	},
	scrollButtons: 'auto',
	variant: 'scrollable',
	selectionFollowsFocus: true,
}))``;
