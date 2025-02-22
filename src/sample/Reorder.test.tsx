import React, { getByTestId, render, screen } from '@testing-library/react';
import Todo from './Todo';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Reorder from './Reorder';

//see https://testing-library.com/docs/react-testing-library/example-intro/
describe('Reorder Component', () => {
  test('add 버튼 눌렀을 때 todo에 잘 올라가는지?', async () => {
    // Arange
    render(<Reorder />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText(/Add/i);
    // Act
    // 입력 이벤트 시뮬레이션
    await userEvent.type(input, 'philpark');

    // Add 버튼 클릭
    await userEvent.click(addButton);
    // Assert
    // 추가된 todo가 문서에 있는지 확인
    const elem = await screen.findByText('philpark');
    expect(elem).toBeInTheDocument();
  });
});
