const QueryStringToJSON = qs =>
  Array.from(new URLSearchParams(qs)).reduce((acc, [key, value]) => {
    return (acc[key] = value), acc;
  }, {});

export default QueryStringToJSON;
