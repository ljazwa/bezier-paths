import { Point } from '../point/types';

const calculateBezierCoordinate = (
    coord: string,
    startPoint: Point,
    endPoint: Point,
    firstControlPoint: Point,
    secondControlPoint: Point,
    t: number,
) =>
    Math.pow(1 - t, 3) * startPoint[coord] +
    3 * Math.pow(1 - t, 2) * t * firstControlPoint[coord] +
    3 * (1 - t) * Math.pow(t, 2) * secondControlPoint[coord] +
    Math.pow(t, 3) * endPoint[coord];

const calculateBezierDerivativeCoordinate = (
    coord: string,
    startPoint: Point,
    endPoint: Point,
    firstControlPoint: Point,
    secondControlPoint: Point,
    t: number,
) =>
    3 * Math.pow(1 - t, 2) * (firstControlPoint[coord] - startPoint[coord]) +
    6 * (1 - t) * t * (secondControlPoint[coord] - firstControlPoint[coord]) +
    3 * Math.pow(t, 2) * (endPoint[coord] - secondControlPoint[coord]);

export const bezier = (
    startPoint: Point,
    endPoint: Point,
    firstControlPoint: Point,
    secondControlPoint: Point,
    fraction: number,
) => ({
    x: calculateBezierCoordinate(
        'x',
        startPoint,
        endPoint,
        firstControlPoint,
        secondControlPoint,
        fraction,
    ),
    y: calculateBezierCoordinate(
        'y',
        startPoint,
        endPoint,
        firstControlPoint,
        secondControlPoint,
        fraction,
    ),
});

export const bezierAngle = (
    startPoint: Point,
    endPoint: Point,
    firstControlPoint: Point,
    secondControlPoint: Point,
    fraction: number,
) => {
    const tangentX = calculateBezierDerivativeCoordinate(
        'x',
        startPoint,
        endPoint,
        firstControlPoint,
        secondControlPoint,
        fraction,
    );
    const tangentY = calculateBezierDerivativeCoordinate(
        'y',
        startPoint,
        endPoint,
        firstControlPoint,
        secondControlPoint,
        fraction,
    );

    return Math.atan2(tangentY, tangentX) * (180 / Math.PI);
};
