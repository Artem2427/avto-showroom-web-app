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

export const Span = styled(P)`
	margin: 0 5px;
	display: inline-block;
	color: #ff6600;
`;

export const Div = styled.div`
	width: fit-content;
	margin: 20px auto;
`;

export const Text = styled(P)`
	padding-bottom: 50px;
`;
