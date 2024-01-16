interface Button {
  message: string,
  nextStepId: string,
  type: 'button' | 'select',
}

export interface Step {
  id: string,
  message: string,
  buttons: Button[]
}
