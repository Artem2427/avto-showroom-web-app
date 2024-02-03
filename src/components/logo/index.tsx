import React, { FC } from 'react';

import { IconButton } from '@mui/material';

import Pages from '@/constants/pages';

import ElectricCarIcon from '../icons/header/ElectricCarIcon';

import { StyledLogo, StyledLogoTypography, StyledLink } from './style';

type Props = {
	xs: string;
	md: string;
	flexGrowValue: number;
};

const Logo: FC<Props> = ({ xs, md, flexGrowValue }) => {
	return (
		<StyledLogo flexgrowvalue={flexGrowValue} md={md} xs={xs}>
			<StyledLink to={Pages.HOME}>
				<IconButton>
					<ElectricCarIcon fill={'white'} />
				</IconButton>
				<StyledLogoTypography>SPEED MOTORS</StyledLogoTypography>
			</StyledLink>
		</StyledLogo>
	);
};

export default Logo;
