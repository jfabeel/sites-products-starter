export async function main(request) {
  const { pathParams, queryParams, site } = request

  return {
    body: "New Plugin",
    headers: null,
    statusCode: 200
  }
}