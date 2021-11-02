import { Scenes, Markup } from 'telegraf'
import { CustomTelegrafContext } from '../types'

export const confirmAccountSceneName = 'ConfirmeAccountScene'

export const confirmAccountScene = new Scenes.BaseScene<CustomTelegrafContext>(confirmAccountSceneName)

export const keyboard = Markup.keyboard([{ text: 'Change account', hide: false }, { text: 'Active reports', hide: false }])
  .resize()

confirmAccountScene.enter((ctx) => (
  ctx.reply('Write your address on Subsocial', Markup.removeKeyboard())
))

confirmAccountScene.on('text', async (ctx) => {
  const input = ctx.message.text

  if (input) {
    ctx.reply('Oops! Account is not valid:' + ctx.chat.id)
    return
  }

  ctx.session.address = input

  ctx.scene.leave()
})