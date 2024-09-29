import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Header } from './Header';

test('should render properly', () => {
  const handleSubmitMock = vi.isMockFunction;
  render(<Header handleSubmit={() => {}} />);
  screen.debug();
});
