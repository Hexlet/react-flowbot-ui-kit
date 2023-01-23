# react-flowbot-ui-kit

## About

[React-flowbot-ui-kit](https://github.com/Hexlet/react-flowbot-ui-kit) - UI kit for creating a flowbot. It works as a widget that is embedded in a page. The user interacts with the bot by pressing buttons in chat and receives messages in response. Bot states are described in yaml format as a finite state machine. Inspired by [react-chatbot-kit](https://github.com/FredrikOseberg/react-chatbot-kit).

inspired by

https://github.com/FredrikOseberg/react-chatbot-kit

### Make your own configuration

#### Questions`s roadmap

First of all you need to make your own question`s roadmap dependencies.

Create a `config.ts` file.

See example of `config.ts` in the `examples` directory.

`config.ts` file has four fields:

1) `initMessages`, an array of messages that users will see when launching a chatbot.
2) `initQuestions`. Here are stored initial roadmap questions for users. The array consists of question names.
3) `answers`. Each answer has four fields:
* `name`. A custom answer name that should be unique;
* `content`. An answer visible for users;
* `questionNames`. The array of the following questions, you can provide your own dependencies;
* `widgets` (optional field). The array of custom widgets that are shown in the answer.
4) `questions`. Each question has three fields:
* `name`. A custom question name that should be unique;;
* `text`. A question visible for users;;
* `answerName`. A custom answer name for this question.

#### Add widgets

You can add custom widgets for answers.

Create your custom widget component. See examples in the `examples/widgets` directory.

Create object `widgets`, import and add all your widgets. 

Create a `getWidget` function that has a `name` param  and returns a component from `widgets` object, consider an example from the `examples/widgets/index.ts`.

### Now check if it`s working

Import function `createFlowBot` from the package in your project.

Import your config file and pass it as the first parameter of the `createFlowBot` function.

`const flowBot = createFlowBot(config);`

If you want to use a custom widget, import your function `getWidget` and pass it into the second parameter of function `createFlowBot`, `userDefinedOptions`.

`const flowBot = createFlowBot(config, { getWidget });`


[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io?utm_source=github&utm_medium=link&utm_campaign=exercises-javascript)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io?utm_source=github&utm_medium=link&utm_campaign=exercises-javascript).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).
