import React from 'react';

type Props = {
	fill: string;
};

const TransmissionIcon: React.FC<Props> = ({ fill }) => {
	return (
		<svg
			height="25px"
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
			viewBox="0 0 512.000000 512.000000"
			width="25px"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				fill={fill}
				stroke="none"
				transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
			>
				<path
					d="M1010 1109 c-14 -6 -36 -20 -48 -32 -78 -72 -68 -185 21 -251 27 -20
40 -21 297 -21 257 0 270 1 297 21 98 73 98 195 0 268 -27 20 -42 21 -285 23
-157 1 -267 -2 -282 -8z M1000 1848 c-66 -34 -93 -79 -88 -149 5 -65 32 -109 82 -133 29 -13
74 -16 286 -16 212 0 257 3 286 16 50 24 77 68 82 133 5 70 -22 115 -88 149
-42 21 -55 22 -280 22 -225 0 -238 -1 -280 -22z M992 2593 c-49 -24 -75 -68 -80 -132 -5 -70 22 -115 88 -148 42 -22
55 -23 280 -23 225 0 238 1 280 23 66 33 93 78 88 148 -5 65 -32 109 -82 133
-50 24 -525 23 -574 -1z M1010 3349 c-14 -6 -36 -20 -48 -32 -78 -72 -68 -185 21 -251 27 -20
40 -21 297 -21 257 0 270 1 297 21 98 73 98 195 0 268 -27 20 -42 21 -285 23
-157 1 -267 -2 -282 -8z M2530 4831 c-88 -28 -140 -60 -201 -120 -115 -116 -165 -290 -128
-450 28 -123 137 -260 252 -315 l57 -28 0 -64 0 -64 -90 0 c-149 0 -247 -31
-329 -105 -49 -45 -96 -134 -111 -210 -8 -43 -10 -382 -8 -1220 l3 -1160 23
-57 c33 -81 108 -160 190 -200 65 -32 69 -33 234 -38 125 -4 171 -8 177 -18 5
-8 11 -59 14 -115 8 -161 50 -247 159 -329 91 -69 94 -69 659 -66 l504 3 62
29 c76 35 144 104 181 184 l27 57 0 415 0 415 -26 56 c-47 100 -123 168 -223
202 -43 15 -100 17 -406 17 -306 0 -359 2 -378 16 l-22 15 0 453 c0 351 3 456
13 464 7 6 115 12 277 14 247 4 269 5 322 27 81 31 159 106 200 189 l33 67 0
305 0 305 -33 67 c-40 82 -119 157 -200 190 -56 22 -64 23 -494 26 l-438 3 0
64 0 64 62 33 c176 93 279 299 248 493 -30 187 -182 353 -361 394 -68 16 -187
12 -249 -8z m298 -1358 c-3 -314 -3 -318 -27 -356 -31 -51 -91 -81 -149 -74
-50 5 -87 29 -119 77 -23 32 -23 38 -23 351 l0 319 161 0 160 0 -3 -317z"
				/>
			</g>
		</svg>
	);
};

export default TransmissionIcon;
