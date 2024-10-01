import { account, Account } from "../database";
import database from "../database";
import { eq } from "drizzle-orm";
import { json } from '@sveltejs/kit'

export async function POST({ request } : { request: Request }) {
  const { email, password } = await request.json();

  const result = await database.insert(account).values({ email, password });
  const insertId = result[0].insertId;

  return json({
    message: `Account successfully created with the following id : ${insertId}`,
  });

}

export async function GET({ url }: { url: URL }) {
  const id = url.searchParams.get("id");
  const result: Account[] = await database
    .select()
    .from(account)
    .where(eq(account.id, id));

  return json(result);
}
