import React from "react";
import {Todo} from "../Modal.ts";
import SingleTodo from "./SingleTodo.tsx";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: React.FC = ({ todos, setTodos }) => {

    return(
        <div className="todos">
            {todos.map((todo) => (
                <SingleTodo 
                    todo={todo.todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos} />
            ))}
        </div>
    )
};

export default TodoList;