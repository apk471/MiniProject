import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useEffect, useState, useCallback } from "react";
import { TodoContextProvider, useTodo } from "../context/TodoContext";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import toast from "react-hot-toast";

export default function ToDo() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (msg, time) => {
    setTodoList((prev) => [
      { id: Date.now(), msg, completed: false, time },
      ...prev,
    ]);
  };
  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((eachTodo) => eachTodo.id !== id));
  };
  const updateTodo = (newmsg, time, id) => {
    setTodoList((prev) =>
      prev.map((eachTodo) => {
        if (eachTodo.id === id) {
          return { ...eachTodo, msg: newmsg, time };
        }
        return eachTodo;
      })
    );
  };
  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((eachTodo) => {
        if (eachTodo.id === id) {
          return { ...eachTodo, completed: !eachTodo.completed };
        }
        return eachTodo;
      })
    );
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList && todoList.length > 0) {
      setTodoList(todoList);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleLogin = useCallback(async (credential) => {
    const googleToken = credential;
    if (!googleToken) return toast.error(`Google token not found`);

    toast.success("Login success");
    window.localStorage.setItem("__twitter_token", googleToken);
  }, []);

  return (
    <GoogleOAuthProvider clientId="911061298800-tr6frgai0ccsdg4rkvu51i6rs9b3dgvq.apps.googleusercontent.com">
      <TodoContextProvider
        value={{
          todoList,
          addTodo,
          deleteTodo,
          updateTodo,
          toggleComplete,
        }}>
        <div className="min-h-screen py-8 px-5 md:px-32 pt-10">
          <div className="flex justify-between items-center pt-14">
            <h1 className="text-3xl font-extrabold md:text-5xl my-3 md:my-6">
              <span className="bg-gradient-to-r from-[#FD42B1] to-[#3792FC] bg-clip-text text-transparent">
                ToDo List
              </span>
            </h1>

            <div className="google-login-box ">
              <GoogleLogin onSuccess={handleLogin} />
            </div>
          </div>

          <TodoForm />
          <div id="todo-container" className="my-6 w-full">
            {todoList.map((eachTodo) => (
              <div key={eachTodo.id} className="w-full">
                <TodoItem todo={eachTodo} />
              </div>
            ))}
          </div>
        </div>
      </TodoContextProvider>
    </GoogleOAuthProvider>
  );
}
