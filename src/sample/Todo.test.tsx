import React, { getByTestId, render, screen } from '@testing-library/react';
import Todo from './Todo';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

//see https://testing-library.com/docs/react-testing-library/example-intro/
describe('Todo Component', () => {
  test('add 버튼 눌렀을 때 올바로 작동하는지?', async () => {
    // Arange
    render(<Todo />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText(/Add/i);
    // Act
    // 입력 이벤트 시뮬레이션
    await userEvent.type(input, 'todo');

    // Add 버튼 클릭
    await userEvent.click(addButton);
    // Assert
    // 추가된 todo가 문서에 있는지 확인
    const elem = await screen.findByText('todo');
    expect(elem).toBeInTheDocument();
  });
});
