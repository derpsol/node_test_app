type MemoizedFunction<T> = (...args: any[]) => T;

function memoize<T>(func: (...args: any[]) => T): MemoizedFunction<T> {
  const cache: Map<string, T> = new Map();

  return (...args: any[]): T => {
    const key: string = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key) as T;
    }

    const result: T = func(...args);
    cache.set(key, result);

    return result;
  };
}
