import { Box, BoxProps, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledLogoTypography = styled(Typography).attrs(() => ({
	sx: {
		fontWeight: '800',
		letterSpacing: '.1rem',
		textDecoration: 'none',
		fontSize: { xs: '14px', md: '16px' },
		color: Palette.light,
		display: 'inline-flex',
	},
}))``;

type StyledBoxProps = BoxProps & {
	xs: string;
	md: string;
	flexgrowvalue: number;
};
export const StyledLogo = styled(Box).attrs(
	({ xs, md, flexgrowvalue }: StyledBoxProps) => ({
		sx: {
			flexGrow: flexgrowvalue,
			display: { xs: xs, md: md },
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
)<StyledBoxProps>``;

export const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
`;
