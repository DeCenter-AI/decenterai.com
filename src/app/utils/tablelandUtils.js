import { Database } from '@tableland/sdk'
import {
  publicClient_mumbai,
  publicClient_polygon,
  get_pk_walletClient_mumbai,
  get_pk_walletClient_polygon
} from './viemClient'

/* 
  @params:
   tableName: human readable form of table
   fiels: formatted field input in form of string
   fields arg for "users" table: id text primary key, name text, lastLoggedIn text, createdAt text, updatedAt text
   fields arg for "user_models" table: id text primary key, userId text, name text, cid text , createdAt text, updatedAt text
*/

export const createTable = async (tableName, fields) => {
  // we get org account as signer here, use mumbai or polygon depending on production type
  const signer = get_pk_walletClient_mumbai()
  console.log(signer.address)
  const db = new Database({ signer })

  const { meta: create } = await db
    .prepare(`CREATE TABLE ${tableName} (${fields});`)
    .run()

  console.log(create.txn.name)
  return create.txn.name
}

//@todo: get table name first
export const add_user = async (
  id,
  name,
  lastLoggedIn,
  createdAt,
  updatedAt
) => {
  const user_table = ''
  const signer = get_pk_walletClient_mumbai()
  const db = new Database({ signer })
  const { meta: insert } = await db
    .prepare(
      `INSERT INTO ${user_table} (id, name, lastLoggedIn, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?);`
    )
    .bind(id, name, lastLoggedIn, createdAt, updatedAt)
    .run()
  const hash = insert.txn.transactionHash
  console.log(hash)
  await publicClient.waitForTransactionReceipt({ hash })
  console.log('Added to dao data')
}
