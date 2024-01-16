const steps = [
  {
    id: 'welcome',
    message: 'some message',
    buttons: [
      {
        message: 'Левая',
        nextStepId: 'left',
        type: 'button',
      },
      {
        message: 'Правая',
        nextStepId: 'right',
        type: 'button',
      },
    ],
  },
  {
    id: 'left',
    message: 'we are on left btn',
    buttons: [
      {
        message: 'Новый вопрос',
        nextStepId: 'next',
        type: 'button',
      },
      {
        message: 'Вернуться назад',
        nextStepId: 'welcome',
        type: 'button',
      },
    ],
  },
  {
    id: 'right',
    message: 'we are on right btn',
    buttons: [
      {
        message: 'Новый вопрос',
        nextStepId: 'next',
        type: 'button',
      },
      {
        message: 'Вернуться назад',
        nextStepId: 'welcome',
        type: 'button',
      },
    ],
  },
  {
    id: 'next',
    message: 'this is final step',
    buttons: [
      {
        message: 'Начать',
        nextStepId: 'welcome',
        type: 'button',
      },
    ]
  }
];

export default steps;
