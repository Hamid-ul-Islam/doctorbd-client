import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Card = ({ content, id, index }) => (
  <Draggable draggableId={id.toString()} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          userSelect: "none",
          padding: 16,
          margin: "0 0 8px 0",
          minHeight: "50px",
          backgroundColor: "#f6f8fa",
          borderRadius: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "grab",
          ...provided.draggableProps.style,
        }}
      >
        {content}
      </div>
    )}
  </Draggable>
);

const DnDList = ({ data, onDragEnd }) => {
  return (
    <Droppable droppableId="list">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {data.map((item, index) => (
            <Card
              key={item.id}
              content={item.content}
              id={item.id}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const DnDContainer = ({ initialData, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DnDList data={initialData} onDragEnd={onDragEnd} />
    </DragDropContext>
  );
};

export default DnDContainer;
