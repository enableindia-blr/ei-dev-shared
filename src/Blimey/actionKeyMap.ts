export type ActionDescriptor = {
  nvda: string
  jaws: string
  narrator: string
  voiceover: string
  orca: string
}

export type ActionKeyMap = {
  [key: string]: ActionDescriptor
}

export type ApplicationKeyMap = {
  word: {
    [key: string]: ActionDescriptor
  }
  excel: {
    [key: string]: ActionDescriptor
  }
  browser: {
    [key: string]: ActionDescriptor
  }
}

export type TypingAction = {
  type: 'typing'
  text: string
}

export type PressKeyAction = {
  type: 'press_key'
  key: string
  instruction?: string
  instructionPreCommand?: string
}
