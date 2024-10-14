import { account, Account } from "../../../db/schema/account";
import database from "../../../db/database";
import { eq } from "drizzle-orm";
import { json } from '@sveltejs/kit'

export async function POST({ request } : { request: Request }) {
  const { email, password } = await request.json();
  try {
    const result = await database.insert(account).values({ email, password });
    const insertId = result[0].insertId;
    return json({
      message: `Account successfully created with the following id : ${insertId}`,
    });
  }
  catch (e) {
    return json({ error: e.message });
  }


}

export async function GET({ url }) {
  const id = url.searchParams.get("id");
  const result: Account[] = await database
    .select()
    .from(account)
    .where(eq(account.id, id));
  
  if (result.length === 0) {
    return json({ error: "Account not found" });
  }

  return json(result);
}
