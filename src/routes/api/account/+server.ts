import { account, Account } from "../../../db/schema/account";
import database from "../../../db/database";
import { eq } from "drizzle-orm";
export async function POST({ request } : { request: Request }) {
  const { email, password } = await request.json();
  try {
    const result = await database.insert(account).values({ email, password });
    const insertId = result[0].insertId;
    return new Response(JSON.stringify({
      message: `Account successfully created with the following id : ${insertId}`,
    }), { status: 201, headers: { 'Content-Type': 'application/json' } });
  }
  catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

export async function GET({ url }) {
  const id = url.searchParams.get("id");
  const result: Account[] = await database
    .select()
    .from(account)
    .where(eq(account.id, id));
  
  if (result.length === 0) {
    return new Response(JSON.stringify({ error: "Account not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
  }

  return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
