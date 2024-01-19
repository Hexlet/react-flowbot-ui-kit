export interface Message {
  message: {
    type: string,
    contents: string[] | undefined,
  }
}
