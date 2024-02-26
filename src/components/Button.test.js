// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Button label="Press me" />);
    const button = getByText('Press me');
    expect(button).toBeTruthy();
  });

  test('triggers onPress callback', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button label="Press me" onPress={onPressMock} />);
    const button = getByText('Press me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
