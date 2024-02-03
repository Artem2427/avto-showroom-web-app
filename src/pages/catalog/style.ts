import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import {
	Box,
	BoxProps,
	Button,
	Container,
	Drawer,
	IconButton,
} from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledNavigationBar = styled(Box).attrs(() => ({
	sx: {
		display: 'flex',
		justifyContent: 'flex-end',
		background: Palette.greyDark,
		position: 'fixed',
		zIndex: 2,
		width: '100%',
	},
}))``;
export const StyledNavContainer = styled(Box).attrs(() => ({
	sx: {
		display: 'flex',
		flexDirection: 'column',
		py: 1,
		px: 3,
		width: { xs: '100%', sm: '100%', md: 'calc(100% - 260px)' },
	},
}))``;
export const StyledSubNav = styled(Box).attrs(() => ({
	sx: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}))``;
export const StyledButton = styled(Button).attrs(() => ({
	sx: {
		background: Palette.orange,
		'&:hover': {
			background: Palette.orangeDark,
		},
	},
	variant: 'contained',
}))``;
export const StyledDrawer = styled(Drawer).attrs(() => ({
	PaperProps: {
		sx: { background: Palette.black },
	},
	anchor: 'left',
	sx: {
		display: { xs: 'block', md: 'none' },
	},
}))``;
type StyledBoxProps = BoxProps & {
	xs: string;

	md: string;
};
export const StyledBox = styled(Box).attrs(({ xs, md }: StyledBoxProps) => ({
	sx: { display: { xs: xs, md: md } },
}))<StyledBoxProps>``;
export const StyledIconButton = styled(IconButton).attrs(() => ({
	size: 'small',
	sx: { mt: '-1px' },
}))``;
export const StyledArrowUpward = styled(ArrowUpward).attrs(() => ({
	sx: { color: Palette.orange },
}))``;
export const StyledArrowDownward = styled(ArrowDownward).attrs(() => ({
	sx: { color: Palette.orange },
}))``;
export const StyledSearchInputBox = styled(Box).attrs(() => ({
	sx: {
		display: { xs: 'none', md: 'flex' },
		justifyContent: 'flex-end',
	},
}))``;
export const StyledContainer = styled(Container).attrs(() => ({
	maxWidth: 'xl',
	sx: {
		overflow: 'auto',
		mt: { xs: 15, md: 9 },
	},
}))``;

export const StyledSettingsIconButton = styled(IconButton).attrs(() => ({
	sx: { color: Palette.orange },
}))``;
