import { createStore } from "solid-js/store";

export const [todoList, setTodoList] = createStore(
    [
        {
            id: 1,
            title: "Todo 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."

        },
        {
            id: 2,
            title: "Todo 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        }
    ]
)