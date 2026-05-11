// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SmartContract title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SmartContract/i);
    expect(titleElement).toBeInTheDocument();
});
