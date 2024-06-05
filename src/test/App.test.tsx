import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";

test('renders the app and add a new task', () => {
    render(<App/>)

    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    const addBtn = screen.getByText(/Add/i);

    fireEvent.change(inputElement, {target: {value: 'New task'}});
    fireEvent.click(addBtn)

    const newTask = screen.getByText(/New task/i)
    expect(newTask).toBeInTheDocument()
});

test('change status of task', () => {
    render(<App/>)

    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
    const addBtn = screen.getByText(/Add/i);

    fireEvent.change(inputElement, {target: {value: 'New task'}});
    fireEvent.click(addBtn)

    const taskElement = screen.getByText(/New task/i)
    fireEvent.click(taskElement)

    expect(taskElement).toHaveClass('task_complited')
})
