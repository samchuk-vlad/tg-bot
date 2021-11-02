import { Telegraf, Scenes } from "telegraf"
import { CustomTelegrafContext } from "./types"
import { TOKEN } from "./utils/env"

import {
	confirmAccountSceneName,
	confirmAccountScene,
} from "./scenes/AuthScene"

const LocalSession = require("telegraf-session-local")

export const bot = new Telegraf<CustomTelegrafContext>(TOKEN)

const stage = new Scenes.Stage([confirmAccountScene])
const localSession = new LocalSession()

bot.use(localSession.middleware())
bot.use(stage.middleware())

bot.start(async (ctx) => {
	await ctx.reply("Hi 👋")
	ctx.scene.enter(confirmAccountSceneName)
})

bot.on('new_chat_members', async (ctx) => {
	ctx.telegram.leaveChat(ctx.chat.id)
})

bot.launch().catch(console.error)

bot.catch((err: any, ctx) =>
	console.error(`Oops, encountered an error for ${ctx.updateType}`, err)
)

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))
