export interface Button {
  text: string,
  nextStepId: string,
  type: 'button' | 'select',
}

export interface Step {
  id: string,
  messages: string[],
  buttons: Button[]
}

export interface AppProps {
  steps: Step[]
}

