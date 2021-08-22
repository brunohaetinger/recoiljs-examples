import { useRecoilValue } from "recoil";
import { todoListState } from "../../recoil/toDo/atoms";
import { TodoItem } from "./ToDoItem";
import { TodoItemCreator } from "./ToDoItemCreator";

export function ToDoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
