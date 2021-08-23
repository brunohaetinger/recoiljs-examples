import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../recoil/toDo/selectors";
import { TodoItem } from "./ToDoItem";
import { TodoItemCreator } from "./ToDoItemCreator";
import { TodoListFilters } from "./ToDoListFilters";
import { TodoListStats } from "./ToDoListStats";

export function ToDoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
