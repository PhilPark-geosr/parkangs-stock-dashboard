import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import StockChart from './StockChart';

export default function StockChartList({
  initialItems,
}: {
  initialItems: { id: string; company: string; x1: string; x2: string }[];
}) {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newOrder = Array.from(items);
    const [movedItem] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, movedItem);

    setItems(newOrder);
  };

  return (
    <div className="container mx-auto p-6">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable-1" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                backgroundColor: snapshot.isDraggingOver
                  ? 'lightblue'
                  : 'white',
                padding: '10px',
                borderRadius: '8px',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <StockChart
                          company={item.company}
                          x1={item.x1}
                          x2={item.x2}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
