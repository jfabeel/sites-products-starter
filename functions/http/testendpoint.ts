export async function main(request) {
  const { pathParams, queryParams, site } = request

  console.log(request);

  if (queryParams.length > 0) {
    return {
      body: queryParams[0],
    }
  }

  return {
    body: null,
    headers: {
      "Location" : "www.yext.com",
    },
    statusCode: 301
  }
}