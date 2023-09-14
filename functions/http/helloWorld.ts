export async function main(request) {
  const { pathParams, queryParams, site } = request

  return {
    body: "Hello World",
    headers: null,
    statusCode: 200
  }
}