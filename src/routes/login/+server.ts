import { account, Account } from "../../db/schema/account";
import database from "../../db/database";
import { eq } from "drizzle-orm";
import { json } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export async function POST({ request } : { request: Request }) {
  const { email, password } = await request.json();
    const result: Account[] = await database.select().from(account).where(eq(account.email, email));
    if (result.length === 0) {
      return json({ error: "Account not found" });
    }
    const account = result[0];

    if (await bcrypt.compare(password, account.password) === false) {
      return json({ error: "Invalid password" });
    }

    const token = jwt.sign({ email }, 'SECRET_HERE', { expiresIn: '1h' });

    return json({
      message: `Successfully logged in with email : ${email}`,
      token
    });

}
