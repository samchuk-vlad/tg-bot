import * as dotenv from 'dotenv'

dotenv.config()

export const TOKEN = process.env.BOT_TOKEN || ''

export const substrateUrl = process.env.SUBSTRATE_WS || 'ws://localhost:9944'

export const ipfsReadOnly = process.env.IPFS_READONLY_URL || 'http://127.0.0.1:8080'

export const appsUrl = process.env.APP_BASE_URL || 'http://localhost:3003'

export const backendUrl = process.env.OFFCHAIN_URL || ''
