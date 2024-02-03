import styled from 'styled-components';

export const H1 = styled.h1`
	width: fit-content;
	margin: 30px auto;
	color: #131313;
	font-size: 40px;
	font-weight: 500;
`;

export const P = styled.div`
	font-size: 18px;
	margin: 5px 0;
	font-weight: 400;
	text-align: center;
`;

export const Text = styled(P)`
	padding-bottom: 50px;
`;

export const Span = styled(P)`
	margin: 0 5px;
	display: inline-block;
	color: #ff6600;
`;
