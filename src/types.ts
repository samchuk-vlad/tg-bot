import { Scenes, Context } from 'telegraf';


interface CustomSession extends Scenes.SceneSession {
  address?: string
  spaceId?: string
  reportIds?: string[]
}

export interface CustomTelegrafContext extends Context {
  session: CustomSession
  scene: Scenes.SceneContextScene<CustomTelegrafContext>
}

export type AdminPanelSceneState = {
  adminConfirmed?: boolean,
  isAnnouncementMode?: boolean,
  announcementMessage?: string
}

type PartialSession = {
  id: string,
  data?: CustomSession
}

export type SessionsArrayObject = {
  sessions: PartialSession[]
}