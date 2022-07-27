import * as React from 'react';
import styled, { css } from 'styled-components';

import PawColorImage from '../../assets/images/pawColor.svg';
import { BezierPoint } from '../../utils/bezier/types';

type PawImageProps = {
    $x: number;
    $y: number;
    $angle: number;
};

const PawImage = styled.img<PawImageProps>(
    ({ $x, $y, $angle }) => css`
        width: 22px;
        height: 28px;
        position: absolute;
        top: ${`${$y}px`};
        left: ${`${$x}px`};
        transform: ${`rotate(${$angle}deg)`};
        display: none;
    `,
);

export const Paw = ({ x, y, angle }: BezierPoint) => (
    <PawImage
        key={`${x} ${y}`}
        $x={x}
        $y={y}
        $angle={angle}
        src={PawColorImage}
    />
);
