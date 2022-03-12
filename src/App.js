import React, { useState, useEffect } from "react";
import Todo from "./Components/Todo/Todo";
import Header from "./Components/Header/Header";
import DialogTodo from "./Components/DialogTodo/DialogTodo";
import DisplayTodo from "./Components/DisplaTodo/DisplayTodo";
import TabsTodo from "./Components/TabsTodo/TabsTodo";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "./App.css";

function App() {
  let time = moment().format("dddd DD");

  const [tab, setTab] = useState(0);
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false);
  const [formTodo, setformTodo] = useState([]);
  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    const raw = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  const handleChangeTab = (tabValue) => {
    setTab(tabValue);
  };

  function todoFilter(complete) {
    if (complete === "all") {
      setFiltered(todos);
    } else {
      let newTodo = [...todos].filter((item) => item.complete === complete);
      setFiltered(newTodo);
    }
  }

  const addform = (item) => {
    setformTodo(item);
  };

  const addTask = (userInput, userValue) => {
    const newItem = {
      id: uuidv4(),
      title: userInput,
      task: userValue,
      complete: false,
      isEdit: false,
    };
    setTodos([...todos, newItem]);
  };

  const handleOpenDialog = () => setIsOpen((prevState) => !prevState);

  const handleOpenTodo = () => {
    setIsOpenDisplayTodo((prevState) => !prevState);
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="app-wrapper">
      <div className="wrapper">
        <header>
          <Header handleOpenDialog={handleOpenDialog} />
          <DialogTodo
            isOpen={isOpen}
            addTask={addTask}
            handleOpenDialog={handleOpenDialog}
          />
        </header>
        <section>
          <aside className="panel">
            <TabsTodo
              handleChangeTab={handleChangeTab}
              tab={tab}
              todoFilter={todoFilter}
            />
          </aside>
          <article>
            {filtered.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                handleOpenTodo={handleOpenTodo}
                removeTask={removeTask}
                handleToggle={handleToggle}
                addform={addform}
              />
            ))}

            <DisplayTodo
              isOpen={isOpenDisplayTodo}
              handleOpenTodo={handleOpenTodo}
              formTodo={formTodo}
            />
          </article>
        </section>
        <footer>
          <div>{time}</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
