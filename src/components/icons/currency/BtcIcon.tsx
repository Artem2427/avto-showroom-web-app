import React from 'react';

type Props = {
	fill: string;
};

const BtcIcon: React.FC<Props> = ({ fill }) => {
	return (
		<svg
			height="30px"
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
			viewBox="0 0 512.000000 512.000000"
			width="30px"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				fill={fill}
				stroke="none"
				transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
			>
				<path
					d="M1920 4265 l0 -215 -320 0 -320 0 0 -210 0 -210 213 -2 212 -3 0
-1065 0 -1065 -212 -3 -213 -2 0 -210 0 -210 320 0 320 0 0 -215 0 -215 215 0
215 0 0 215 0 215 210 0 210 0 0 -215 0 -215 215 0 215 0 0 218 0 217 92 22
c311 76 546 306 629 618 30 112 30 298 0 410 -43 162 -132 309 -256 423 l-65
59 33 39 c197 232 256 538 161 823 -42 126 -99 216 -204 322 -105 106 -200
169 -319 209 l-71 25 0 227 0 228 -215 0 -215 0 0 -215 0 -215 -210 0 -210 0
0 215 0 215 -215 0 -215 0 0 -215z m1151 -649 c37 -8 86 -24 110 -36 54 -28
142 -111 173 -164 74 -127 74 -305 0 -432 -35 -59 -125 -141 -186 -169 -92
-41 -155 -46 -608 -43 l-425 3 -3 415 c-1 228 0 421 3 427 7 20 845 18 936 -1z
m162 -1293 c116 -44 215 -139 258 -250 32 -82 32 -224 0 -306 -45 -114 -152
-215 -268 -253 -54 -18 -94 -19 -573 -19 l-515 0 -3 415 c-1 228 0 421 3 428
4 10 105 12 522 10 505 -3 519 -4 576 -25z"
				/>
			</g>
		</svg>
	);
};

export default BtcIcon;
