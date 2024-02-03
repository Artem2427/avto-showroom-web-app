import styled from 'styled-components';

export const Form = styled.div`
	display: flex;
	width: 50%;
	margin: 0 auto;
	flex-direction: column;
	margin: 0 auto 50px auto;
	justify-content: space-between;
	align-items: baseline;
	@media (max-width: 1024px) {
		width: 80%;
	}
	@media (max-width: 768px) {
		width: 95%;
	}
`;

export const InputStyle = {
	width: '100%',
	margin: '0 auto 20px auto',
	'& label.Mui-focused': {
		color: '#ff6600',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#ff6600',
	},
};

export const ButtonStyle = {
	width: '100%',
	margin: '20px auto',
	color: '#ff6600',
};

export const Title = styled.h1`
	width: fit-content;
	margin: 0 auto 30px auto;
	color: #131313;
	font-size: 40px;
	font-weight: 500;
	color: #ff6600;
`;

export const ActionName = styled.p`
	width: fit-content;
	margin: 10px auto;
	font-size: 20px;
	font-weight: 500;
`;

export const ErrorMassage = styled.div`
	margin: 0 auto;
	font-size: 14px;
	font-weight: 400;
	color: red;
	text-align: center;
`;
