// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HashPlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HashPlus/i);
    expect(titleElement).toBeInTheDocument();
});
