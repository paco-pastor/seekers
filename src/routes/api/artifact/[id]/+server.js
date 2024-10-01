import database from '../../database';
import { page } from '$app/stores';

// WIP

export async function GET({ request, url }) {
    // const { account_id } = request.searchParams;
    console.log(page.url.searchParams.has('account_id'));
    // const query = await database.query(
    //     'SELECT * FROM account WHERE account_id = ?',
    //     [account_id]
    // );
    return new Response(JSON.stringify(url.searchParams));
}