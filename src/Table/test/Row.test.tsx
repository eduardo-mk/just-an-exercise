import { render, screen } from '@testing-library/react';
import Row from '../Row';

const item = {
  name: 'John Doe',
  device: 'iPhone',
  path: '/home/johndoe',
  status: 'available',
  selected: false,
};

const spy = jest.fn();

test('renders a row', async () => {
  render(<table><tbody><Row item={item} onClickHandler={spy} /></tbody></table>);
  const row = screen.getByTestId(`row-${item.name}`);
  expect(row).toBeTruthy();
});
