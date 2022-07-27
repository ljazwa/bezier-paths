import * as React from 'react';
import _ from 'lodash/fp';

import { animatePath } from './animatePath';
import { Paw } from './Paw';
import {
    generateEquallyDistributedBezierPoints,
    transformBezierPathByVector,
} from '../../utils/bezier/bezierUtils';
import { BezierPoint } from '../../utils/bezier/types';
import { createVector } from '../../utils/point/pointUtils';
import { Point } from '../../utils/point/types';

const createPaws = (bezierPaths: BezierPoint[][]) =>
    _.flatMap(_.map((point: BezierPoint) => Paw(point)))(bezierPaths);

type Props = {
    startPoint: Point;
    endPoint: Point;
    firstControlPoint: Point;
    secondControlPoint: Point;
    step: number;
    distance: number;
};

export const Paws = ({
    startPoint,
    endPoint,
    firstControlPoint,
    secondControlPoint,
    step,
    distance
}: Props) => {
    const ref = React.useRef<HTMLDivElement>();

    React.useEffect(() => {
        animatePath(ref.current);
    }, []);

    const bezierPoints = generateEquallyDistributedBezierPoints(
        startPoint,
        endPoint,
        firstControlPoint,
        secondControlPoint,
        step,
        distance,
    );
    const mirroredBezierPoints = transformBezierPathByVector(
        bezierPoints,
        createVector(35, 65),
    );
    const path = _.zip(bezierPoints, mirroredBezierPoints);

    return <div ref={ref}>{createPaws(path)}</div>;
};
