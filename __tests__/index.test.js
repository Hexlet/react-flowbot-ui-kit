import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import createFlowBot from '../src/init.jsx';
import baseConfig from '../__fixtures__/baseConfig.js';
import getWidget from '../__fixtures__/widgets/index.js';

const initialHtml = '<div id="root"></div>';

beforeEach(async () => {
  document.body.innerHTML = initialHtml;
});

test('originally should be deactivated', async () => {
  const bot = await createFlowBot(baseConfig);
  render(bot, { container: document.getElementById('root') });

  expect(screen.getByRole('button', { name: 'Click to activate' })).toBeInTheDocument();
  expect(screen.queryByTestId('botContainer')).not.toBeInTheDocument();
});

test('toggle bot mode', async () => {
  const user = userEvent.setup();
  const bot = await createFlowBot(baseConfig);
  const { getByTestId } = render(bot, { container: document.getElementById('root') });

  const botToggler = screen.getByRole('button');

  await user.click(botToggler);

  expect(botToggler).toHaveTextContent('Active! Click to deactivate');

  const initMessages = [
    'Hello! I am here to help you!',
    'Please, choise a question you want to ask',
  ];

  initMessages.forEach((message) => {
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  const initQuestions = [
    'Show engine info',
    'Show wheels',
    'Show breaks',
  ];

  initQuestions.forEach((question) => {
    expect(screen.getByRole('button', { name: question })).toBeInTheDocument();
  });

  const botContainer = getByTestId('botContainer');

  await user.click(botToggler);

  expect(botContainer).not.toBeInTheDocument();
  expect(botToggler).toHaveTextContent('Click to activate');
});

test('conversation with the bot', async () => {
  const user = userEvent.setup();
  const bot = await createFlowBot(baseConfig);
  render(bot, { container: document.getElementById('root') });

  const botToggler = screen.getByRole('button');
  await user.click(botToggler);

  const firstQuestionText = 'Show engine info';
  const firstAnswerText = 'A car engine is an internal combustion engine.';
  const questionsAfterFirstAnswer = [
    'Show cylinder Piston Group',
    'Show engine lubrication system',
  ];

  const firstQuestionButton = screen.getByRole('button', { name: firstQuestionText });

  await user.click(firstQuestionButton);

  expect(await screen.findByText(firstAnswerText)).toBeInTheDocument();
  questionsAfterFirstAnswer.forEach((text) => {
    expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
  });
  expect(firstQuestionButton).not.toBeInTheDocument();
  expect(screen.getByText(firstQuestionText)).toBeInTheDocument();

  const secondQuestionText = 'Show engine lubrication system';
  const secondAnswerText = 'The job of the lubrication system is to distribute oil to the moving parts to reduce friction between surfaces which rub against each other';
  const questionAfterSecondAnswer = 'Show constraction';

  const secondQuestionButton = screen.getByRole('button', { name: secondQuestionText });

  await user.click(secondQuestionButton);

  expect(await screen.findByText(secondAnswerText)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: questionAfterSecondAnswer })).toBeInTheDocument();
  expect(secondQuestionButton).not.toBeInTheDocument();
  expect(screen.getByText(secondQuestionText)).toBeInTheDocument();

  expect(screen.getByText(firstAnswerText)).toBeInTheDocument();
  questionsAfterFirstAnswer.forEach((text) => {
    expect(screen.queryByRole('button', { name: text })).not.toBeInTheDocument();
  });
  expect(screen.getByText(firstQuestionText)).toBeInTheDocument();
});

test('widgets', async () => {
  const user = userEvent.setup();
  const bot = await createFlowBot(baseConfig, { getWidget });
  render(bot, { container: document.getElementById('root') });

  const botToggler = screen.getByRole('button');
  await user.click(botToggler);

  const questionButton = screen.getByRole('button', { name: /Show breaks/i });
  await user.click(questionButton);

  const firstWidgetText = 'Anti-lock braking system (ABS)';
  const firstWidgetLinkText = 'See more information about ABS on Wikipedia';
  const secondWidgetText = 'Electronic stability control (ESC)';
  const secondWidgetLinkText = 'See more information about ESP on Wikipedia';

  expect(await screen.findAllByTestId('widget')).toHaveLength(2);
  expect(screen.getByText(firstWidgetText)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: firstWidgetLinkText })).toBeInTheDocument();
  expect(screen.getByText(secondWidgetText)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: secondWidgetLinkText })).toBeInTheDocument();
});

test('previous question button', async () => {
  const user = userEvent.setup();
  const bot = await createFlowBot(baseConfig, { getWidget });
  render(bot, { container: document.getElementById('root') });

  expect(screen.queryByTestId('prevQuestionBtn')).not.toBeInTheDocument();

  const botToggler = screen.getByRole('button');
  await user.click(botToggler);

  const prevQuestionBtn = screen.getByTestId('prevQuestionBtn');
  expect(prevQuestionBtn).toBeInTheDocument();

  const firstQuestionText = 'Show engine info';
  const firstQuestionButton = screen.getByRole('button', { name: firstQuestionText });
  await user.click(firstQuestionButton);

  const firstAnswerText = 'A car engine is an internal combustion engine.';
  expect(await screen.findByText(firstAnswerText)).toBeInTheDocument();

  const secondQuestionText = 'Show engine lubrication system';
  const secondQuestionButton = await screen.getByRole('button', { name: secondQuestionText });
  await user.click(secondQuestionButton);

  const secondAnswerText = 'The job of the lubrication system is to distribute oil to the moving parts to reduce friction between surfaces which rub against each other';
  expect(await screen.findByText(secondAnswerText)).toBeInTheDocument();

  const thirdQuestionText = 'Show constraction';
  expect(screen.getByRole('button', { name: thirdQuestionText })).toBeInTheDocument();

  await user.click(prevQuestionBtn);

  expect(await screen.getByRole('button', { name: secondQuestionText })).toBeInTheDocument();
});

test('reset button', async () => {
  const user = userEvent.setup();
  const bot = await createFlowBot(baseConfig, { getWidget });
  render(bot, { container: document.getElementById('root') });

  expect(screen.queryByTestId('resetBtn')).not.toBeInTheDocument();

  const botToggler = screen.getByRole('button');
  await user.click(botToggler);

  const resetBtn = screen.getByTestId('resetBtn');
  expect(resetBtn).toBeInTheDocument();

  const firstQuestionText = 'Show engine info';
  const firstQuestionButton = screen.getByRole('button', { name: firstQuestionText });
  await user.click(firstQuestionButton);

  const firstAnswerText = 'A car engine is an internal combustion engine.';
  expect(await screen.findByText(firstAnswerText)).toBeInTheDocument();

  const secondQuestionText = 'Show engine lubrication system';
  const secondQuestionButton = await screen.getByRole('button', { name: secondQuestionText });
  await user.click(secondQuestionButton);

  const secondAnswerText = 'The job of the lubrication system is to distribute oil to the moving parts to reduce friction between surfaces which rub against each other';
  expect(await screen.findByText(secondAnswerText)).toBeInTheDocument();

  const thirdQuestionText = 'Show constraction';
  expect(screen.getByRole('button', { name: thirdQuestionText })).toBeInTheDocument();

  await user.click(resetBtn);

  expect(await screen.getByRole('button', { name: firstQuestionText })).toBeInTheDocument();
});
