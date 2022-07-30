import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import createFlowBot from '../src/init.jsx';
import config from '../src/examples/config.js';
import getWidget from '../src/examples/widgets/index.js';

const initialHtml = '<div id="container"></div>';

beforeEach(async () => {
  document.body.innerHTML = initialHtml;
});

test('originally should be deactivated', async () => {
  const bot = await createFlowBot(config);
  const { container } = render(bot);
  expect(container).toMatchSnapshot();
});

test('toggle bot mode', async () => {
  const user = userEvent.setup();
  const bot = await createFlowBot(config);
  render(bot, { container: document.getElementById('container') });

  const botToggler = screen.getByRole('button');

  await user.click(botToggler);

  expect(document.getElementById('container')).toMatchSnapshot();

  await user.click(botToggler);

  expect(document.getElementById('container')).toMatchSnapshot();
});

test('conversation with the bot', async () => {
  const user = userEvent.setup();
  const bot = await createFlowBot(config);
  render(bot, { container: document.getElementById('container') });

  const botToggler = screen.getByRole('button');
  await user.click(botToggler);

  const questionButton1 = screen.getByRole('button', { name: /Show engine type/i });
  await user.click(questionButton1);

  expect(document.getElementById('container')).toMatchSnapshot();

  await waitFor(() => {
    expect(screen.getByRole('button', { name: /show constraction/i })).toBeInTheDocument();
    expect(document.getElementById('container')).toMatchSnapshot();
  });

  const questionButton2 = screen.getByRole('button', { name: /show constraction/i });
  await user.click(questionButton2);

  await waitFor(() => {
    expect(screen.getByRole('button', { name: /Show engine type/i })).toBeInTheDocument();
    expect(document.getElementById('container')).toMatchSnapshot();
  });
});

test('widgets', async () => {
  const user = userEvent.setup();
  const bot = await createFlowBot(config, { getWidget });
  render(bot, { container: document.getElementById('container') });
  const firstWidgetText = 'Anti-lock braking system (ABS)';
  const firstWidgetLinkText = 'See more information about ABS on Wikipedia';
  const secondWidgetText = 'Electronic stability control (ESC)';
  const secondWidgetLinkText = 'See more information about ESP on Wikipedia';

  const botToggler = screen.getByRole('button');
  await user.click(botToggler);

  const questionButton = screen.getByRole('button', { name: /Show breaks/i });
  await user.click(questionButton);

  expect(await screen.findAllByTestId('widget')).toHaveLength(2);
  expect(screen.getByText(firstWidgetText)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: firstWidgetLinkText })).toBeInTheDocument();
  expect(screen.getByText(secondWidgetText)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: secondWidgetLinkText })).toBeInTheDocument();
});
