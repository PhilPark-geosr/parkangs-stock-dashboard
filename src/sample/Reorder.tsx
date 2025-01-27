import React, { useState } from 'react';
import Column from '@/components/Column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRef } from 'react';
import { styled } from '@stitches/react';

// NOTE: https://codesandbox.io/p/sandbox/drag-and-drop-8fbtg?file=%2Fpackage.json%3A6%2C5-6%2C33
const StyledColumns = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  margin: '10vh auto',
  width: '80%',
  height: '80vh',
  gap: '8px',
});

function Reorder() {
  const initialColumns = {
    todo: {
      id: 'todo',
      list: ['item 1', 'item 2', 'item 3'],
    },
    doing: {
      id: 'doing',
      list: [],
    },
    done: {
      id: 'done',
      list: [],
    },
  };
  const [columns, setColumns] = useState(initialColumns);
  const [inputValue, setInputValue] = useState<string>('');
  function onAddNewTodo(newTodoInput: string) {
    console.warn('newTodoInput', newTodoInput);
    setColumns(
      (previousColumns: {
        todo: { id: string; list: string[] };
        doing: { id: string; list: never[] };
        done: { id: string; list: never[] };
      }) => {
        const newColumns = {
          ...previousColumns,
          todo: {
            id: previousColumns.todo.id,
            list: [...previousColumns.todo.list, newTodoInput],
          },
        };
        return newColumns;
      },
    );
    setInputValue('');
  }

  const onDragEnd = ({ source, destination }: DropResult) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index,
      );

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index,
      );

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledColumns>
          {Object.values(columns).map((col) => (
            <Column col={col} key={col.id} />
          ))}
        </StyledColumns>
      </DragDropContext>
      <div className="add-todo-container">
        <textarea
          data-testid="todo-input"
          placeholder="New todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        <button onClick={() => onAddNewTodo(inputValue)}>Add</button>
        <button>Cancel</button>
      </div>
    </>
  );
}

export default Reorder;
