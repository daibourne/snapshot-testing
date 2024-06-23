import React from 'react';
import { render } from '@testing-library/react';
import GitHubCard from './components/GitHubCard';

test('GitHubCard matches snapshot', () => {
    const { asFragment } = render(<GitHubCard />);
    expect(asFragment()).toMatchSnapshot();
});