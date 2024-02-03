import React, { FC } from 'react';

import {
	DirectionsCar,
	LocalGasStation,
	CalendarMonth,
} from '@mui/icons-material';
import {
	CardActionArea,
	CardContent,
	Typography,
	CardMedia,
	Card,
	Icon,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { CURRENCY_ICONS } from '@/constants/filters';
import { CarType } from '@/type';

import TransmissionIcon from '../icons/carIcons/carAttributeIcons/TransmissionIcon';

import {
	TypeText,
	Container,
	FlexContainer,
	LastDiv,
	TypeItem,
	StyledStack,
	MediaStyle,
	StyledTypography,
} from './style';

type Props = {
	car: CarType;
};

const CardCar: FC<Props> = ({ car }) => {
	return (
		<Card sx={{ height: '100%' }}>
			<Link to={`/catalog/${car.id}`}>
				<CardActionArea>
					<StyledStack>
						<Typography
							sx={{
								pt: 0.4,
								pl: 0.5,
							}}
						>
							{Math.ceil(car.price)}
						</Typography>
						{CURRENCY_ICONS[car.currency]}
					</StyledStack>
					<CardMedia
						alt="car"
						component="img"
						image={
							car.images[car.mainImage - 1]
								? car.images[car.mainImage - 1]
								: '/img/defaultCar.png'
						}
						style={MediaStyle}
					></CardMedia>
					<CardContent>
						<StyledTypography>{car.name}</StyledTypography>
						<Container>
							<FlexContainer>
								<DirectionsCar fontSize="inherit" />
								<TypeItem>Body:</TypeItem>
								<TypeText>{car.bodyType.body}</TypeText>
							</FlexContainer>
							<FlexContainer>
								<LocalGasStation fontSize="inherit" />
								<TypeItem>Fuel:</TypeItem>
								<TypeText>{car.engine.fuel.fuelType}</TypeText>
							</FlexContainer>
							<FlexContainer>
								<CalendarMonth fontSize="inherit" />
								<TypeItem>Year:</TypeItem>
								<TypeText>{new Date(car.createYear).getFullYear()}</TypeText>
							</FlexContainer>
							<LastDiv>
								<Icon sx={{ width: '20px' }}>
									<TransmissionIcon fill={'#a8a8a8'} />
								</Icon>
								<TypeItem>Transmission:</TypeItem>
								<TypeText>{car.transmission.transmission}</TypeText>
							</LastDiv>
						</Container>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
};

export default CardCar;
