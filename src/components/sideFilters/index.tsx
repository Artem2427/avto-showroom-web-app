import React, { FC, useEffect, useMemo, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, AccordionSummary, Accordion } from '@mui/material';

import { DEFAULT_FILTERS } from '@/constants/filters';
import { useAppSelector } from '@/hooks';
import { FilterFieldEnum, CatalogType } from '@/type';

import Palette from '../../palette/index';
import RangePicker from '../rangePicker';

import BrandsCar from './BrandsCar';
import CarColors from './CarColors';
import CarTypes from './CarTypes';
import Currency from './Currency';
import EngineTypes from './EngineTypes';
import TransmissionsCar from './Transmissions';
import { StyledAccordionDetails, StyledBox } from './style';

const SideFilters: FC = () => {
	const filters = useAppSelector((state) => state.filter.filters);
	const catalogFromStore = useAppSelector((state) => state.catalog.carFilters);
	const catalog = (() => {
		return Object.values(catalogFromStore).length
			? catalogFromStore
			: DEFAULT_FILTERS;
	})();
	const [expanded, setExpanded] = React.useState<string | false>(false);
	const [priceSliderControl, setPriceSliderControl] = useState<number[]>([
		catalog.price.from
			? catalog.price.from
			: filters
			? Math.floor(filters.minPrice)
			: 0,
		catalog.price.to
			? catalog.price.to
			: filters
			? Math.ceil(filters.maxPrice)
			: 0,
	]);
	const [raceSliderControl, setRaceSliderControl] = useState<number[]>([
		catalog.race.from ? catalog.race.from : filters ? filters.minRace : 0,
		catalog.race.to ? catalog.race.to : filters ? filters.maxRace : 0,
	]);

	const handleExpansion =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	const minYear = useMemo(
		() =>
			catalog.createYear.from
				? new Date(catalog.createYear.from).getFullYear()
				: filters
				? new Date(filters.minYear).getFullYear()
				: 0,
		// eslint-disable-next-line
		[filters?.minYear, catalog.createYear.from]
	);

	const maxYear = useMemo(
		() =>
			catalog.createYear.to
				? new Date(catalog.createYear.to).getFullYear()
				: filters
				? new Date(filters.maxYear).getFullYear()
				: 0,
		// eslint-disable-next-line
		[filters?.maxYear, catalog.createYear.to]
	);

	const [yearSliderControl, setYearSliderControl] = useState<number[]>([
		minYear,
		maxYear,
	]);

	const filterItems: CatalogType[] = [
		{
			name: 'CURRENCY',
			element: <Currency />,
			panel: 'panel1',
		},
		{
			name: 'CAR BRANDS',
			element: <BrandsCar />,
			panel: 'panel2',
		},
		{
			name: 'CAR TYPE',
			element: <CarTypes />,
			panel: 'panel3',
		},
		{
			name: 'FUEL TYPE',
			element: <EngineTypes />,
			panel: 'panel4',
		},
		{
			name: 'TRANSMISSION',
			element: <TransmissionsCar />,
			panel: 'panel5',
		},
		{
			name: 'COLOR',
			element: <CarColors />,
			panel: 'panel6',
		},
		{
			name: 'PRICE',
			element: (
				<RangePicker
					field={FilterFieldEnum.price}
					filters={filters}
					maxSlider={filters ? Math.ceil(filters.maxPrice) : 0}
					minDistance={filters ? Math.ceil((filters.maxPrice / 100) * 5) : 0}
					minSlider={filters ? Math.floor(filters.minPrice) : 0}
					setSliderControl={setPriceSliderControl}
					sliderControl={priceSliderControl}
				/>
			),
			panel: 'panel7',
		},
		{
			name: 'YEAR',
			element: (
				<RangePicker
					field={FilterFieldEnum.createYear}
					filters={filters}
					maxSlider={filters ? new Date(filters.maxYear).getFullYear() : 0}
					minDistance={0}
					minSlider={filters ? new Date(filters.minYear).getFullYear() : 0}
					setSliderControl={setYearSliderControl}
					sliderControl={yearSliderControl}
				/>
			),
			panel: 'panel8',
		},
		{
			name: 'RACE',
			element: (
				<RangePicker
					field={FilterFieldEnum.race}
					filters={filters}
					maxSlider={filters ? filters.maxRace : 0}
					minDistance={filters ? Math.ceil((filters.maxRace / 100) * 5) : 0}
					minSlider={filters ? filters.minRace : 0}
					setSliderControl={setRaceSliderControl}
					sliderControl={raceSliderControl}
				/>
			),
			panel: 'panel9',
		},
	];

	useEffect(() => {
		setPriceSliderControl([
			catalog.price.from
				? catalog.price.from
				: filters
				? Math.floor(filters.minPrice)
				: 0,
			catalog.price.to
				? catalog.price.to
				: filters
				? Math.ceil(filters.maxPrice)
				: 0,
		]);
		setYearSliderControl([minYear, maxYear]);
		setRaceSliderControl([
			catalog.race.from ? catalog.race.from : filters ? filters.minRace : 0,
			catalog.race.to ? catalog.race.to : filters ? filters.maxRace : 0,
		]);
		// eslint-disable-next-line
	}, [
		filters?.minPrice,
		filters?.maxPrice,
		minYear,
		maxYear,
		catalog.price.from,
		catalog.price.to,
		catalog.race.from,
		catalog.race.to,
	]);

	return (
		<StyledBox>
			{filterItems.map((el, index) => (
				<Accordion
					expanded={expanded === el.panel}
					key={index}
					onChange={handleExpansion(el.panel)}
					sx={{
						color: Palette.light,
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: Palette.light }} />}
						sx={{ background: Palette.black }}
					>
						<Typography sx={{ flexShrink: 0 }}>{el.name}</Typography>
					</AccordionSummary>
					<StyledAccordionDetails>{el.element}</StyledAccordionDetails>
				</Accordion>
			))}
		</StyledBox>
	);
};

export default SideFilters;
