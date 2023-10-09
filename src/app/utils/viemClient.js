import { createPublicClient, http } from 'viem'
import { polygon, polygonMumbai } from 'viem/chains'
import { Wallet, getDefaultProvider } from 'ethers'

//public client for polygon mumbai
export const publicClient_mumbai = createPublicClient({
  chain: polygonMumbai,
  transport: http()
})

//public client for polygon mainnet
export const publicClient_polygon = createPublicClient({
  chain: polygon,
  transport: http()
})

//wallet client for polygon mumbai, this is org account with table access
export function get_pk_walletClient_mumbai () {
  const owner = new Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY)
  const provider = getDefaultProvider(
    'https://rpc-mumbai.maticvigil.com/'
  )
  const signer = owner.connect(provider)
  return signer
}


//wallet client for polygon mumbai, this is org account with table access
export function get_pk_walletClient_polygon () {
  const owner = new Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY)
  const provider = getDefaultProvider(
    'https://polygon-rpc.com/'
  )
  const signer = owner.connect(provider)
  return signer
}
