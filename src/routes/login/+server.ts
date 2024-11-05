import { account, Account } from "../../db/schema/account";
import database from "../../db/database";
import { eq } from "drizzle-orm";
import { json } from '@sveltejs/kit'
import crypto from 'crypto';

export async function POST({ request } : { request: Request }) {
  const { email, password } = await request.json();
  try {
    const result: Account[] = await database.select().from(account).where(eq(account.email, email));
    if (result.length === 0) {
      return json({ error: "Account not found" });
    }
    const account = result[0];
    const hash = crypto.createHash('sha256');
    hash.update
    const hashedPassword = hash.digest('hex');
    if (account.password !== hashedPassword) {
      return json({ error: "Invalid password" });
    }

    return json({
      message: `Successfully logged in with email : ${email}`,
    });
  }
  catch (e) {
    return json({ error: e.message });
  }


}
