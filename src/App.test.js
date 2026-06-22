// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DecenAnchor title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DecenAnchor/i);
    expect(titleElement).toBeInTheDocument();
});
