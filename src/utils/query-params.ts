const getQueryParams = (key: string) => {
  if (typeof window === 'undefined') return;

  const params: Record<string, any> = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams: URLSearchParams, prop: string) => searchParams.get(prop),
  });

  return params[key];
};

/** @Note 새로고침을 방지하려면 replace prop으로 router.replace 함수를 넘긴다  */
const setQueryParams = (key: string, value: any, replace?: (href: URL) => void) => {
  if (!value) {
    return;
  }

  const href = new URL(window.location.href);
  href.searchParams.set(key, value);

  replace ? replace(href) : window.location.replace(href.toString());
};

const QueryParams = {
  get: getQueryParams,
  set: setQueryParams,
};

export default QueryParams;
