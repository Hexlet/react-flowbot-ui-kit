interface Button {
  text: string,
  nextStepId: string,
  type: 'button' | 'select',
}

export interface Step {
  id: string,
  message: string,
  buttons: Button[]
}
