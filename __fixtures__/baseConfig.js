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
      name: 'engineInfo',
      content: 'A car engine is an internal combustion engine.',
      questionNames: [
        'cylinderPistonGroup',
        'lubricationSystem',
      ],
    },
    {
      name: 'cylinderPistonGroup',
      content: 'cylinder is the space in which a piston travels',
      questionNames: [
        'overallConstruction',
      ],
    },
    {
      name: 'lubricationSystem',
      content: 'The job of the lubrication system is to distribute oil to the moving parts to reduce friction between surfaces which rub against each other',
      questionNames: [
        'overallConstruction',
      ],
    },
    {
      name: 'wheelCharacteristics',
      content: 'R17 4 items',
      questionNames: [
        'overallConstruction',
      ],
    },
    {
      name: 'characteristicChoise',
      content: 'Here is car parts which you can study',
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
      text: 'Show engine info',
      answerName: 'engineInfo',
    },
    {
      name: 'cylinderPistonGroup',
      text: 'Show cylinder Piston Group',
      answerName: 'cylinderPistonGroup',
    },
    {
      name: 'lubricationSystem',
      text: 'Show engine lubrication system',
      answerName: 'lubricationSystem',
    },
    {
      name: 'wheels',
      text: 'Show wheels',
      answerName: 'wheelCharacteristics',
    },
    {
      name: 'overallConstruction',
      text: 'Show constraction',
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
