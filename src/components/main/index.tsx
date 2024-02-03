import React, { FC, ReactNode } from 'react';

import { StyledMain } from './style';

type Props = {
	children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
	return <StyledMain>{children}</StyledMain>;
};

export default Main;
