import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import createFlowBot from '../src/init.jsx';
import config from '../src/examples/config.js';

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
