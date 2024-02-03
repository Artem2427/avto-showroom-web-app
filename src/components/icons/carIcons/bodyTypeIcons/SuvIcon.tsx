import React from 'react';

type Props = {
	fill: string;
};

const SuvIcon: React.FC<Props> = ({ fill }) => {
	return (
		<svg
			height="40px"
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
			viewBox="0 0 512.000000 512.000000"
			width="40px"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				fill="#000000"
				stroke="none"
				transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
			>
				<path
					d="M1705 2290 c-25 -28 -23 -76 4 -103 l22 -22 870 0 871 0 25 29 c27
31 25 66 -4 99 -15 16 -71 17 -893 17 -866 0 -877 0 -895 -20z M4055 2105 c-43 -42 -34 -70 53 -157 65 -65 84 -78 110 -78 42 0 72
31 72 73 0 29 -12 45 -79 110 -88 86 -114 95 -156 52z M989 2053 c-67 -65 -79 -81 -79 -110 0 -42 30 -73 72 -73 26 0 45 13
110 78 87 87 96 115 53 157 -42 43 -68 34 -156 -52z M560 3586 c-132 -28 -185 -75 -359 -321 -208 -291 -201 -268 -201
-701 0 -361 3 -383 69 -470 58 -77 133 -109 311 -134 202 -29 185 -21 199 -84
14 -62 66 -155 119 -209 110 -113 277 -165 430 -133 141 29 269 125 328 246
l29 59 1115 0 1115 0 29 -59 c60 -123 201 -226 345 -250 253 -43 499 137 543
397 34 203 -77 409 -268 500 -69 33 -89 38 -172 41 -116 5 -198 -15 -280 -67
-116 -76 -195 -193 -214 -321 -6 -36 -12 -71 -14 -77 -5 -19 -2163 -19 -2168
0 -2 6 -8 41 -14 77 -19 128 -98 245 -214 321 -82 52 -164 72 -280 67 -82 -3
-103 -8 -168 -40 -41 -19 -94 -52 -117 -72 -55 -48 -115 -139 -137 -209 -21
-68 -13 -66 -196 -37 -69 11 -128 20 -132 20 -17 0 -82 67 -94 97 -10 23 -14
86 -14 228 l0 195 60 0 c48 0 63 4 80 22 22 24 26 58 10 88 -12 22 -61 40
-111 40 l-39 0 0 43 c1 23 9 65 18 93 20 58 264 406 317 453 43 37 120 61 198
61 52 0 58 -2 53 -17 -4 -10 -48 -89 -98 -177 -70 -122 -92 -170 -95 -205 -5
-56 19 -106 67 -138 l33 -23 1511 0 c867 0 1583 -4 1680 -10 308 -18 581 -60
788 -121 109 -32 268 -103 268 -119 0 -6 -27 -10 -60 -10 -68 0 -100 -21 -100
-66 0 -63 40 -84 161 -84 l79 0 0 -214 c0 -200 -1 -215 -20 -239 -13 -16 -35
-29 -58 -33 -88 -16 -113 -102 -41 -140 81 -41 228 49 259 160 8 29 11 119 8
292 l-3 249 -32 67 c-45 96 -101 152 -197 197 -235 112 -604 187 -1027 209
l-156 9 -319 203 c-176 112 -359 223 -409 246 -116 56 -239 91 -366 104 -149
15 -1977 12 -2049 -4z m800 -341 l0 -205 -335 0 -336 0 12 23 c7 12 59 104
116 205 l105 182 219 0 219 0 0 -205z m842 15 c14 -102 27 -193 27 -202 1 -17
-23 -18 -359 -18 l-360 0 0 198 c0 109 3 202 7 205 4 4 153 6 332 5 l326 -3
27 -185z m528 157 c52 -14 125 -38 161 -55 54 -24 351 -206 489 -299 l35 -23
-516 0 -516 0 -26 188 c-15 103 -27 196 -27 206 0 18 7 19 153 13 112 -5 177
-12 247 -30z m-1541 -1132 c115 -63 176 -174 169 -305 -16 -272 -334 -402
-541 -221 -20 18 -51 63 -69 99 -28 57 -33 77 -33 142 0 65 5 85 33 142 37 76
93 128 169 159 75 30 200 23 272 -16z m3091 16 c110 -42 192 -149 207 -269 18
-159 -101 -319 -264 -352 -134 -28 -285 47 -350 174 -37 72 -43 180 -14 257
35 91 107 162 200 195 55 20 162 17 221 -5z"
					fill={fill}
				/>
			</g>
		</svg>
	);
};

export default SuvIcon;