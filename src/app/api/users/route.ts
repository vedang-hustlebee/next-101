export async function GET(request: Request, res: Response) {
  const users = [{name: 'John', email: 'john@example.com'}];
  return Response.json(users);
}
