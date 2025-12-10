import { getSquareArea, getSquareTriangle } from '../services/area';
import { test, expect} from '@jest/globals';

test("checked area sqare", () => {

  const sqareArea = getSquareArea(3);
  const sqareTriangle = getSquareTriangle(3,4);

  expect(sqareArea).toBe(9);
  expect(sqareTriangle).toBe(6);
});