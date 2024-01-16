import { TodoList } from "./TodoList";
import { TodoAddProfe } from "./TodoAddProfe";
import { useTodo } from "../hooks/useTodo";



export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo([]);

  return (
    <>
        <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo} />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAddProfe addTodo={ handleNewTodo }/>
            </div>
        </div>

        
    </>
   
  )
}
