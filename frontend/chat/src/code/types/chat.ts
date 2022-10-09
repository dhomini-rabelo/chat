export interface UserMessageType {
  username: string
}

export interface MessageType {
  username: string
  created_at: string
  text: string
}

export interface MessagesType {
  messages: Array<MessageType>
  last_message: MessageType | null
}

export interface ChatType {
  code: string
  created_at: string
  created_by: string
  image: string
  messages: MessagesType
  users: Array<UserMessageType>
}
