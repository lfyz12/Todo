import ITodo, {toDoStatus} from "../Models";
import {render, fireEvent, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Menu from "../components/Menu";
import React from 'react';

const todoPosts: ITodo[] = [
    { id: 1, text: 'Task 1', status: toDoStatus.ACTIVE },
    { id: 2, text: 'Task 2', status: toDoStatus.COMPLITED },
];

const mockChangeFilter = jest.fn();
const mockDelComplited = jest.fn();

test('renders menu and counts active tasks', () => {
    render(
        <Menu
            posts={todoPosts}
            isChangeStatus={true}
            changeFilter={mockChangeFilter}
            delComplited={mockDelComplited}
        />
    );

    expect(screen.getByText(/1 todo left/i)).toBeInTheDocument();
});

test('calls change filter function on button click', () => {
    render(
        <Menu
            posts={todoPosts}
            isChangeStatus={true}
            changeFilter={mockChangeFilter}
            delComplited={mockDelComplited}
        />
    );

    const activeButton = screen.getByText(/Active/i);
    fireEvent.click(activeButton);

    expect(mockChangeFilter).toHaveBeenCalledWith('active');
});

test('calls delComplited function on button click', () => {
    render(
        <Menu
            posts={todoPosts}
            isChangeStatus={true}
            changeFilter={mockChangeFilter}
            delComplited={mockDelComplited}
        />
    );

    const clearButton = screen.getByText(/Clear complited/i);
    fireEvent.click(clearButton);

    expect(mockDelComplited).toHaveBeenCalled();
});