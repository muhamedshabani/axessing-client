import { User } from './user'

export interface Workspace {
  id: number
  name: string
  description: string
  logoURL: string
  collaborators?: User[]
}
