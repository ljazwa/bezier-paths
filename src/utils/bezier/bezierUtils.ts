import _ from 'lodash/fp';

import { Vector } from './../point/types';
import { createVector } from './../point/pointUtils';
import { distanceBetweenPoints, movePointByVector } from '../point/pointUtils';
import { Point } from '../point/types';
import { bezier, bezierAngle } from './bezierCurve';
import { BezierPoint, ClosestPointInfo } from './types';

function* fractionGenerator(step: number) {
    for (let i = 0; i < 1; i += step) {
        yield i;
    }
}

const calculateBezierPoint = (
    startPoint: Point,
    endPoint: Point,
    fraction: number,
    firstControlPoint: Point,
    secondControlPoint: Point,
) =>
    bezier(
        startPoint,
        endPoint,
        firstControlPoint,
        secondControlPoint,
        fraction,
    );

const calculateBezierAngle = (
    startPoint: Point,
    endPoint: Point,
    fraction: number,
    firstControlPoint: Point,
    secondControlPoint: Point,
) =>
    bezierAngle(
        startPoint,
        endPoint,
        firstControlPoint,
        secondControlPoint,
        fraction,
    );

const generateBezierPoints = (
    startPoint: Point,
    endPoint: Point,
    firstControlPoint: Point,
    secondControlPoint: Point,
    step: number,
): BezierPoint[] =>
    _.flowRight(
        _.map((f: number) => ({
            x: calculateBezierPoint(
                startPoint,
                endPoint,
                f,
                firstControlPoint,
                secondControlPoint,
            ).x,
            y: calculateBezierPoint(
                startPoint,
                endPoint,
                f,
                firstControlPoint,
                secondControlPoint,
            ).y,
            angle: calculateBezierAngle(
                startPoint,
                endPoint,
                f,
                firstControlPoint,
                secondControlPoint,
            ),
        })),
        Array.from,
        fractionGenerator,
    )(step);

const findClosestBezierPoint = (
    point: Point,
    bezierPath: BezierPoint[],
    startIndex: number,
): ClosestPointInfo => {
    let i = startIndex;
    let prevDistance = Infinity;
    while (
        i < bezierPath.length &&
        prevDistance > distanceBetweenPoints(point, bezierPath[i])
    ) {
        prevDistance = distanceBetweenPoints(point, bezierPath[i++]);
    }

    return {
        index: i,
        point: bezierPath[i === bezierPath.length ? i - 1 : i],
    };
};

export const generateEquallyDistributedBezierPoints = (
    startPoint: Point,
    endPoint: Point,
    firstControlPoint: Point,
    secondControlPoint: Point,
    step: number,
    distance: number,
) => {
    const bezierPoints = generateBezierPoints(
        startPoint,
        endPoint,
        firstControlPoint,
        secondControlPoint,
        step,
    );

    const result = [bezierPoints[0]];
    let currentPoint = bezierPoints[0];
    let index = 0;

    while (index < bezierPoints.length - 1) {
        const transformedPoint = {
            ...movePointByVector(
                currentPoint,
                createVector(distance, currentPoint.angle),
            ),
            angle: currentPoint.angle,
        };

        ({ index, point: currentPoint } = findClosestBezierPoint(
            transformedPoint,
            bezierPoints,
            index,
        ));

        result.push(currentPoint);
    }

    return result;
};

export const transformBezierPathByVector = (
    path: BezierPoint[],
    { length, angle }: Vector,
): BezierPoint[] =>
    path.map((point: BezierPoint) => ({
        ...movePointByVector(point, createVector(length, point.angle + angle)),
        angle: point.angle,
    }));
