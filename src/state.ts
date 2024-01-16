const state = [
  {
    id: 'welcome',
    message: 'some message',
    buttons: [
      {
        text: 'Левая',
        next_state_id: 'left',
        type: 'button', // select
      },
      {
        text: 'Правая',
        next_state_id: 'right',
        type: 'button', // select
      },
    ],
  },
  {
    id: 'left',
    message: 'we are on left btn',
    buttons: [
      {
        text: 'Новый вопрос',
        next_state_id: 'next',
      },
      {
        text: 'Вернуться назад',
        next_state_id: 'welcome',
      },
    ],
  },
  {
    id: 'right',
    message: 'we are on right btn',
    buttons: [
      {
        text: 'Новый вопрос',
        next_state_id: 'next',
      },
      {
        text: 'Вернуться назад',
        next_state_id: 'welcome',
      },
    ],
  },
  {
    id: 'next',
    message: 'this is final step',
    buttons: [
      {
        text: 'Начать',
        next_state_id: 'welcome',
      },
    ]
  }
];

export default state;
