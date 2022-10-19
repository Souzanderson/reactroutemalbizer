let _context: any = {};

export default function useContext<T = any>(
  key: string,
  persist = false,
  default_value: any = null
): [T, (value: T) => void] {
  const __get__ = () => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "");
      return value as T;
    } catch {}
  };

  const __save__ = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const setContext = (value: T) => {
    let context = _context;
    context[key] = value;
    Object.assign(_context, context);
    if (persist) {
      __save__(value);
    }
  };

  if (persist && !!!_context[key]) {
    const default_data = __get__();
    console.log(default_data);
    if (default_data) setContext(default_data);
  } else if (default_value && !!!_context[key]) {
    setContext(default_value);
  }

  return [_context[key], setContext];
}
