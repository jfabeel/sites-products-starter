export async function main(request) {
  const { pathParams, queryParams, site } = request

  if (queryParams.length > 0) {
    return {
      body: queryParams[0],
    }
  }

  return {
    body: "New Hello World!",
    headers: null,
    statusCode: 200
  }
}