import {
  renderHook,
  RenderHookResult,
  act,
} from "@testing-library/react-hooks";

import useDebounce from "./useDebounce";

function getHook(
  text: string,
  ms: number
): RenderHookResult<{ value: string; delay: number }, string> {
  return renderHook(({ value, delay }) => useDebounce<string>(value, delay), {
    initialProps: {
      value: text,
      delay: ms,
    },
  });
}

describe("use debounce hook", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should be defined", () => {
    expect(useDebounce).toBeDefined();
  });

  it("should return new value", () => {
    const delay = 1000;
    const text = "";
    const nextText = "new Text";

    const { result, rerender } = getHook(text, delay);

    expect(result.current).toEqual(text);

    rerender({ value: nextText, delay });

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current).toEqual(nextText);
  });

  it("should not return new value", () => {
    const delay = 1000;
    const text = "";
    const nextText = "new Text";

    const { result, rerender } = getHook(text, delay);

    expect(result.current).toEqual(text);

    rerender({ value: nextText, delay });

    expect(result.current).not.toEqual(nextText);
  });
});
