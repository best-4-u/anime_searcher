import { renderHook, RenderHookResult } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";

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
    const delay = 5;
    const text = "";
    const nextText = "new Text";

    const hook = getHook(text, delay);

    expect(hook.result.current).toEqual(text);

    act(() => {
      hook.rerender({ value: nextText, delay });
      jest.runAllTimers();
    });

    expect(hook.result.current).toEqual(nextText);
  });

  it("should not return new value", () => {
    const delay = 5;
    const text = "";
    const nextText = "new Text";

    const hook = getHook(text, delay);

    expect(hook.result.current).toEqual(text);

    act(() => {
      hook.rerender({ value: nextText, delay });
    });

    expect(hook.result.current).not.toEqual(nextText);
  });
});
