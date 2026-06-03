export const config = {
  runtime: "edge",
};

export default async function handler(request: Request): Promise<Response> {
  const server = await import("../dist/server/server.js");
  const entry = server.default ?? server;
  return entry.fetch(request, {}, {});
}
