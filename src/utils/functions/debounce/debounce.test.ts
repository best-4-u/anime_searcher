import debounce from "./debounce";

jest.useFakeTimers("modern");

describe("debounce", () => {
  let func: jest.Mock;
  let debouncedFunc: Function;
  const DEBOUNCED_TIME = 1000;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, DEBOUNCED_TIME);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("execute just once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }

    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });

  test("execute twice", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }

    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);

    debouncedFunc();
    jest.runAllTimers();

    expect(func).toBeCalledTimes(2);
  });
});
