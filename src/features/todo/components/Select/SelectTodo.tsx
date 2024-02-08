import EmptyTodoList from '@/components/EmptyTodo/EmptyTodoList';
import TodoComponent from '@/components/Todo/TodoComponent';

const SelectTodo = () => (
  <>
    <TodoComponent title="Select to do" showTextField={false} />
    <EmptyTodoList forSelection={true} />
  </>
);

export default SelectTodo;
