import React, {
	ChangeEvent,
	useState,
	useEffect,
	FC,
	Dispatch,
	SetStateAction,
} from 'react';

import { Box } from '@mui/material';

import { positiveNumbersRegex } from '@/constants/regularExpressions';
import { useAppDispatch } from '@/hooks';
import { handleRangeFilter } from '@/store/catalogSlice';
import { FilterFieldEnum, FiltersType } from '@/type';

import {
	StyledBox,
	StyledButton,
	StyledInput,
	StyledSlider,
	StyledTypography,
} from './style';

type Props = {
	sliderControl: number[];
	setSliderControl: Dispatch<SetStateAction<number[]>>;
	filters: FiltersType | null;
	field: FilterFieldEnum;
	minDistance: number;
	minSlider: number;
	maxSlider: number;
};

const RangePicker: FC<Props> = ({
	sliderControl,
	setSliderControl,
	filters,
	field,
	minDistance,
	minSlider,
	maxSlider,
}) => {
	const dispatch = useAppDispatch();

	const [min, setMin] = useState<number | string | null>(
		sliderControl ? sliderControl[0] : 0
	);
	const [max, setMax] = useState<number | string | null>(
		sliderControl ? sliderControl[1] : 0
	);

	const handleSliderChange = (
		event: Event,
		newValue: number | number[],
		activeThumb: number
	) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (sliderControl) {
			const minRange = [
				Math.min(newValue[0], sliderControl[1] - minDistance),
				sliderControl[1],
			];
			const maxRange = [
				sliderControl[0],
				Math.max(newValue[1], sliderControl[0] + minDistance),
			];

			if (activeThumb === 0) {
				setSliderControl(minRange);
			} else {
				setSliderControl(maxRange);
			}
		}
	};

	const isMaxPriceNotExist = () => {
		if (filters) {
			filters.maxPrice ? true : false;
		}
		return false;
	};

	useEffect(() => {
		if (sliderControl) {
			setMin(sliderControl[0]);
			setMax(sliderControl[1]);
		}
	}, [sliderControl]);

	const handleInputChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
		if (filters && positiveNumbersRegex.test(event.target.value)) {
			setMin(Number(event.target.value));
		}
	};

	const handleInputChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
		if (filters && positiveNumbersRegex.test(event.target.value)) {
			setMax(Number(event.target.value));
		}
	};

	const handleClick = () => {
		if (sliderControl && min && max) {
			const from = Math.min(+min, sliderControl[1] - minDistance);
			const to = Math.max(+max, sliderControl[0] + minDistance);

			setSliderControl([from, to]);

			if (to === maxSlider && from === minSlider) {
				dispatch(handleRangeFilter({ field: field, from: null, to: null }));
			} else {
				dispatch(handleRangeFilter({ field: field, from: from, to: to }));
			}
		}
	};

	return (
		<Box>
			<StyledBox>
				<StyledInput
					disabled={isMaxPriceNotExist()}
					onChange={handleInputChangeMin}
					value={min}
				/>
				<StyledTypography>-</StyledTypography>
				<StyledInput
					disabled={isMaxPriceNotExist()}
					onChange={handleInputChangeMax}
					value={max}
				/>
				<StyledButton disabled={isMaxPriceNotExist()} onClick={handleClick}>
					OK
				</StyledButton>
			</StyledBox>
			<StyledSlider
				disableSwap
				disabled={isMaxPriceNotExist()}
				max={maxSlider}
				min={minSlider}
				onChange={handleSliderChange}
				value={sliderControl ? sliderControl : [0, 0]}
			/>
		</Box>
	);
};

export default RangePicker;
