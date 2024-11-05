import { account, Account } from "../../db/schema/account";
import database from "../../db/database";
import { eq } from "drizzle-orm";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export async function POST({ request } : { request: Request }) {
  const { email, password } = await request.json();
  const result: Account[] = await database.select().from(account).where(eq(account.email, email));
  
  if (result.length === 0) {
    return new Response(JSON.stringify({ error: "Account not found" }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  const account = result[0];

  if (await bcrypt.compare(password, account.password) === false) {
    return new Response(JSON.stringify({ error: "Invalid password" }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const token = jwt.sign({ email }, 'SECRET_HERE', { expiresIn: '1h' });

  return new Response(JSON.stringify({
    message: `Successfully logged in with email : ${email}`,
    token
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
