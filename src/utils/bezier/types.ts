import { Point } from '../point/types';

export type BezierPoint = {
    angle: number;
} & Point;

export type ClosestPointInfo = {
    index: number;
    point: BezierPoint;
};
