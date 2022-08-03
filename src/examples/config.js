const botConfiguration = {
  initMessages: [
    'Hello! I am here to help you!',
    'Please, choise a question you want to ask',
  ],
  initQuestions: [
    'engine',
    'wheels',
    'brakes',
  ],
  answers: [
    {
      name: 'engineType',
      content: 'v8 turbo-diesel',
      questionNames: [
        'wheels',
        'brakes',
        'overallConstruction',
      ],
    },
    {
      name: 'wheelCharacteristics',
      content: 'R17 4 items',
      questionNames: [
        'engine',
        'brakes',
        'overallConstruction',
      ],
    },
    {
      name: 'characteristicChoise',
      content: 'Here is car parts whitch you can study',
      questionNames: [
        'engine',
        'brakes',
        'wheels',
      ],
    },
    {
      name: 'brakesCharacteristics',
      content: 'ABS, ESP',
      questionNames: [
        'engine',
        'wheels',
        'overallConstruction',
      ],
      widgets: [
        'ABS',
        'ESP',
      ],
    },
  ],
  questions: [
    {
      name: 'engine',
      text: 'Show engine type',
      answerName: 'engineType',
    },
    {
      name: 'wheels',
      text: 'Show wheels',
      answerName: 'wheelCharacteristics',
    },
    {
      name: 'overallConstruction',
      text: 'show constraction',
      answerName: 'characteristicChoise',
    },
    {
      name: 'brakes',
      text: 'Show breaks',
      answerName: 'brakesCharacteristics',
    },
  ],
};

export default botConfiguration;
