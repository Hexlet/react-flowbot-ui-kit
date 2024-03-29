# Flowbot Widget

## Установка 

1. Установить зависимость:
    ```bash
    npm i @hexlet/chatbot-v2
    ```
2. Импортировать стили:
    ```javascript
    import '@hexlet/chatbot-v2/styles'
    ```
3. Импортировать и запустить бота:
    ```javascript
    import ReactDOM from 'react-dom/client';
    import Widget from '@hexlet/chatbot-v2';
    import steps from '@hexlet/chatbot-v2/example-steps';
    import '@hexlet/chatbot-v2/styles';

    const container = document.getElementById('root');
    ReactDOM.createRoot(container)
      .render(Widget(steps));
    ```

Функция принимает параметром шаги для работы чат-бота.

## Описание конфигурации шагов

Каждый шаг описывается объектом:

```javascript
{
  id, // Идентификатор текущего шага
  messages, // Сообщения
  buttons, // Отображаемые кнопки
}
```

Каждая кнопка описывается объектом:

```javascript
{
  text, // Текст кнопки
  nextStepId, // Идентификатор шага, к которому будет переход при клике по кнопке
  type, // тип кнопки
}
```

Пример:

```javascript
const steps = [
  {
    id: 'welcome',
    messages: [
      'Привет! Я ваш виртуальный помощник. Нажмите "Начать разговор", чтобы открыть чат',
    ],
    buttons: [
      {
        text: 'Начать разговор',
        nextStepId: 'start',
        type: "button",
      },
    ],
  },
  {
    id: 'start',
    messages: [
      'Помогу вам выбрать подходящий курс. Выбирайте категорию вопроса, и буквально через пару шагов я смогу рассказать вам то, что нужно.',
    ],
    buttons: [
      {
        text: 'Попробовать себя в IT',
        nextStepId: 'try',
        type: "button",
      },
    ],
  },
  {
    id: 'try',
    messages: [
      'У нас есть подготовительные курсы, которые длятся всего 2 недели.За это время вы знакомитесь с основами программирвоания, пробуете его на практике и плавной подойдете к старту обучения в основной программе. Все это под руководством опытного программиста. Он поможет, если будут сложности. Курс стоит всего 990 рублей',
    ],
    buttons: [
      {
        text: 'Вернуться назад',
        nextStepId: 'start',
        type: "button",
      },
    ],
  },
];
```
