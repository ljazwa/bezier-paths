import * as React from 'react';
import styled from 'styled-components';

import { getColor } from '../styles/theme';

const StyledContainer = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${getColor('gray')};
`;

export const App = () => <StyledContainer>Hello World!</StyledContainer>;
