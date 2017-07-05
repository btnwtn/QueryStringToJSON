const _compose = (f, g) => x => f(g(x));

const SearchParams = {
  of: qs => new URLSearchParams(qs)
};

const QueryStringToJSON = qs =>
  Array.from(qs).reduce((acc, [key, value]) => {
    return (acc[key] = value), acc;
  }, {});

const qsToJSON = _compose(QueryStringToJSON, SearchParams.of);

export default qsToJSON;
