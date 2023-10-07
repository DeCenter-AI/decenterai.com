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
  console.log(create.txn.transactionHash)
  return create.txn.name
}

const user_table = 'users_80001_7679'
const user_models_table = 'user_models_80001_7684'

//@todo: get table name first
export const add_user = async (id, name) => {
  const signer = get_pk_walletClient_mumbai()
  const db = new Database({ signer })
  let time = new Date().toLocaleString('en-GB', { timeZone: 'UTC' })
  const {
    meta: insert,
    success,
    error
  } = await db
    .prepare(
      `INSERT INTO ${user_table} (id, name, lastLoggedIn, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?);`
    )
    .bind(id, name, time, time, time)
    .run()
  const hash = insert.txn.transactionHash
  if (!success) {
    new Error(error)
  }
  await publicClient_mumbai.waitForTransactionReceipt({ hash })
  console.log('Added to users table')
}

export const add_user_models = async (userId, name, cid) => {
  const signer = get_pk_walletClient_mumbai()
  const db = new Database({ signer })
  let time = new Date().toLocaleString('en-GB', { timeZone: 'UTC' })
  const {
    meta: insert,
    success,
    error
  } = await db
    .prepare(
      `INSERT INTO ${user_models_table} (userId, name, cid , createdAt, updatedAt) VALUES ( ?, ?, ?, ?, ?);`
    )
    .bind(userId, name, cid, time, time)
    .run()
  if (!success) {
    new Error(error)
  }
  const hash = insert.txn.transactionHash
  console.log(hash)
  await publicClient_mumbai.waitForTransactionReceipt({ hash })
  console.log('Added to users table')
}

export const user_logged_in = async userId => {
  const signer = get_pk_walletClient_mumbai()
  const db = new Database({ signer })
  let time = new Date().toLocaleString('en-GB', { timeZone: 'UTC' })
  const stmt = await db
    .prepare(`UPDATE ${user_table} SET lastLoggedIn=${time} WHERE id=${userId}`)
    .run()

  if (!stmt.success) {
    new Error(stmt.error)
  }
  const hash = stmt.meta.txn.transactionHash
  await publicClient_mumbai.waitForTransactionReceipt({ hash })
  console.log('Updated User Login Data')
}
