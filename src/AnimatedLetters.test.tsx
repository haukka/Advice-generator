import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedLetters from './AnimatedLetters';

describe("fetchUsers", () => {
    it('renders learn react link', () => {
        render(<AnimatedLetters letterClass={''} strArray={['h', 'e', 'l', 'l', 'o']} idx={0} />);
        expect(screen.getByText('h')).toBeInTheDocument();
    });
});