import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MasonryGrid from '../MasonryGrid';

describe('MasonryGrid Component', () => {
  test('opens detail modal when a project is clicked', async () => {
    const user = userEvent.setup();
    const projects = [
      {
        id: 1,
        title: 'Sample Project',
        description: 'Short description',
        category: 'Category',
        image: '/image1.jpg',
        details: 'Detailed information',
        dimensions: '10x10'
      }
    ];

    render(<MasonryGrid projects={projects} />);
    expect(screen.queryByText('Detailed information')).not.toBeInTheDocument();

    const image = screen.getByAltText('Sample Project');
    await user.click(image);

    expect(screen.getByText('Detailed information')).toBeInTheDocument();
  });
});
