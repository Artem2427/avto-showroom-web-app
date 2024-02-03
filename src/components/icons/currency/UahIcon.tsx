import React from 'react';

type Props = {
	fill: string;
};

const UahIcon: React.FC<Props> = ({ fill }) => {
	return (
		<svg
			height="30px"
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
			viewBox="0 0 200.000000 200.000000"
			width="30px"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				fill={fill}
				stroke="none"
				transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
			>
				<path
					d="M947 1589 c-83 -20 -188 -90 -238 -160 l-20 -28 59 -40 59 -40 39 41
c100 104 265 119 356 31 53 -50 61 -135 17 -181 -20 -22 -24 -22 -339 -22
l-320 0 0 -70 0 -70 216 -2 217 -3 -101 -67 -102 -68 -115 0 -115 0 0 -75 0
-75 58 0 57 0 0 -78 c1 -63 5 -86 27 -128 89 -171 318 -228 525 -130 64 31
163 107 163 126 0 4 -23 26 -50 49 l-50 42 -41 -35 c-73 -62 -123 -80 -219
-81 -76 0 -90 3 -133 28 -71 42 -103 120 -75 182 l11 25 319 0 319 0 -3 73 -3
72 -209 3 -210 2 107 70 106 70 105 0 106 0 0 70 0 70 -45 0 -45 0 6 68 c8 81
-5 132 -47 195 -74 113 -243 171 -392 136z"
				/>
			</g>
		</svg>
	);
};

export default UahIcon;
