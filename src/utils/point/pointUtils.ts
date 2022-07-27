import { Point, Vector } from './types';

export const distanceBetweenPoints = (p1: Point, p2: Point) =>
    Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

export const movePointByVector = (
    point: Point,
    { length: vectorLength, angle: vectorAngle }: Vector,
) => {
    const radian = (vectorAngle * Math.PI) / 180;
    return {
        x: point.x + Math.cos(radian) * vectorLength,
        y: point.y + Math.sin(radian) * vectorLength,
    };
};

export const createVector = (length: number, angle: number): Vector => ({
    length,
    angle,
});
