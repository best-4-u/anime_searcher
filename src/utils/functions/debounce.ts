const debounce = function <T extends Function>(cb: T, wait: number) {
  let timeout: null | ReturnType<typeof setTimeout> = null;
  let callable = (...args: any) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      cb(...args);
    }, wait);
  };

  return callable;
};

export default debounce;
