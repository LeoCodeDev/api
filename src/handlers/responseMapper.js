const responseMapper = (data, cb) => {
  const { results } = data;

  const mappedResponse = results.map((res) => cb(res));

  return mappedResponse;
};

module.exports = responseMapper;
