import { combineMovies } from "./soccer";

const identify = (arr) => {
  return arr.map((item, index) => Object.assign({}, item, { id: index }));
};
console.log(
  identify([
    { startTime: 10, endTime: 14 },
    { startTime: 14, endTime: 25 },
    { startTime: 0, endTime: 12 },
    { startTime: 67, endTime: 90 },
    { startTime: 23, endTime: 67 }
  ])
);

if (false) {
  test("Soccer - trivial", () => {
    const res = combineMovies(
      identify([
        { startTime: 0, endTime: 12 },
        { startTime: 12, endTime: 30 },
        { startTime: 30, endTime: 60 },
        { startTime: 60, endTime: 90 }
      ])
    );
    expect(res.length).toEqual(4);
    const indexVector = res.map((i) => i.id);
    indexVector.toEqual([1, 2, 3, 4]);
  });
  test("Soccer - overlap", () => {
    const res = combineMovies(
      identify([
        { startTime: 0, endTime: 12 },
        { startTime: 10, endTime: 14 },
        { startTime: 12, endTime: 25 },
        { startTime: 23, endTime: 67 },
        { startTime: 25, endTime: 50 },
        { startTime: 67, endTime: 90 }
      ])
    );
    expect(res.length).toEqual(6);
    const indexVector = res.map((i) => i.id);
    indexVector.toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("Soccer - unsorted", () => {
    const res = combineMovies(
      identify([
        { startTime: 10, endTime: 14 },
        { startTime: 14, endTime: 25 },
        { startTime: 0, endTime: 12 },
        { startTime: 67, endTime: 90 },
        { startTime: 23, endTime: 67 }
      ])
    );
    expect(res).toBeFalsy();
    const indexVector = res.map((i) => i.id);
    indexVector.toEqual([2, 0, 1, 4, 3]);
  });
  test("Soccer - gap", () => {
    const res = combineMovies(
      identify([
        { startTime: 0, endTime: 12 },
        { startTime: 10, endTime: 14 },
        { startTime: 16, endTime: 25 },
        { startTime: 23, endTime: 67 },
        { startTime: 67, endTime: 90 }
      ])
    );
    expect(res).toBeFalsy();
  });
  test("Soccer - included", () => {
    const res = combineMovies(
      identify([
        { startTime: 0, endTime: 12 },
        { startTime: 5, endTime: 10 },
        { startTime: 12, endTime: 25 },
        { startTime: 23, endTime: 67 },
        { startTime: 23, endTime: 67 },
        { startTime: 67, endTime: 90 }
      ])
    );
    expect(res.length).toEqual(4);
  });
  test("Soccer - single shot", () => {
    expect(combineMovies([{ startTime: 0, endTime: 90 }])).toEqual([1, 5]);
  });
}
