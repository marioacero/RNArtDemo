import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {EventCard} from './EventCard';
import sampleEvent from '@fixture/eventFixture';

// Mock the onPress function
const mockOnPress = jest.fn();

describe('EventCard', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <EventCard event={sampleEvent} onPress={mockOnPress} />,
    );
    // Check if the title and description are rendered correctly
    expect(
      getByText(`${sampleEvent.title} - ${sampleEvent.location}`),
    ).toBeTruthy();
    expect(getByText('Sample description')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const {getByTestId} = render(
      <EventCard event={sampleEvent} onPress={mockOnPress} />,
    );
    // Simulate press event
    fireEvent.press(getByTestId(`${sampleEvent.id}`));
    // Check if onPress is called with the correct event
    expect(mockOnPress).toHaveBeenCalledWith(sampleEvent);
  });
});
