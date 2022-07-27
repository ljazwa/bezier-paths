import * as React from 'react';

import { Paws } from './paws/Paws';

export const App = () => (
    <Paws
        startPoint={{ x: 70, y: 175 }}
        endPoint={{ x: 1506, y: 350 }}
        firstControlPoint={{ x: 500, y: -425 }}
        secondControlPoint= {{ x: 706, y: 1350 }}
        step={0.002}
        distance={45}
    />
);
