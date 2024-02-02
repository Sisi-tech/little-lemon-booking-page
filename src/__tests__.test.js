import React from 'react';
import { fireEvent, render } from '@testing-library/jest-dom';
import BookingForm from './BookingForm';

test('renders BookingForm', () => {
    const firstName = "Sisi";
    const lastName = "Wang";
    const selectedDate = "2024-12-01";
    const time = "18:30pm";
    const handleSubmit = jest.fn()
    render(<BookingForm  onSubmit={handleSubmit} />);

    const firstNameInput = screen.getByLabelText(/First name/);
    fireEvent.change(firstNameInput, { target: {value: firstName}});

    const lastNameInput = screen.getByLabelText(/Last Name/);
    fireEvent.change(lastNameInput, { target: { value: lastName }});

    const selectedDateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(selectedDateInput, { target: { value: selectedDate}});

    const timeInput = screen.getByLabelText(/Time/);
    fireEvent.change(timeInput, { target: { value: time }});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
        firstName,
        lastName,
        selectedDate,
        time,
    });
});