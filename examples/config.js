const botConfiguration = {
  initMessages: [
    'Hello! I am here to help you!',
    'Please, choise a question you want to ask',
  ],
  initQuestions: [
    'engine',
  ],
  answers: [
    {
      name: 'engineType',
      content: 'v8 turbo-diesel',
      questionNames: [
        'wheels',
        'overallConstruction',
      ],
    },
    {
      name: 'wheelCharacteristics',
      content: 'R17 4 items',
      questionNames: [
        'brakes',
      ],
    },
    {
      name: 'characteristicChoise',
      content: 'Here is car parts whitch you can study',
      questionNames: [],
    },
    {
      name: 'brakesCharacteristics',
      content: 'ABS, ESP',
      questionNames: [],
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
