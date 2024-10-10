export async function main(request) {
  const { pathParams, queryParams, site } = request

  return {
    body: "New Plugin 2",
    headers: null,
    statusCode: 200
  }
}