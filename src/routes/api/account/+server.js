import database from '../database';

export async function POST({ request }) {
    const { email, password } = await request.json();
    const query = await database.query(
        'INSERT INTO account (email, password) VALUES (?, ?)',
        [email, password]
    );
    const insertId = query[0].insertId;
    return new Response(`Account successfully created with the following id : ${insertId}`);
}