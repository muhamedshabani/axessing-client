export interface Ticket {
  id: number
  title: string
  description: string
  createdDate: string
  lastModifiedDate: string
  stage: string | number
  labels?: unknown[]
}
