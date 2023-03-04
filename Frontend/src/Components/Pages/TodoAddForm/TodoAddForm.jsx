import { Button, Card, Form } from "solid-bootstrap"
import { setTodoList, todoList } from "../TodoListStore/TodoListStore";

const TodoAddForm = ({ todo, description,setDescription,setTodo }) => {

    const handleTodoAdd = (e) => {

        e.preventDefault();

        // console.log(todo(), description());
        if (todo() === "" || description() === "") {
            setIsError({
                isError: true,
                errorMessage: "Please fill all the fields."
            })

            setTimeout(() => {
                setIsError({
                    isError: false,
                    errorMessage: ""
                })

            }, 3000)
            return;
        }
        setTodoList([...todoList, {
            id: todoList.length + 1,
            title: todo(),
            description: description()
        }])
        setTodo("");
        setDescription("");

    }

    return (
        <Card class="p-2  bg-dark text-light mb-2">
            <Form onSubmit={handleTodoAdd}>
                <Form.Group class="mb-2">
                    <Form.Label>Todo</Form.Label>
                    <Form.Control type="text" placeholder="Enter Todo"
                        value={todo()}
                        onInput={(e) => setTodo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description"
                        value={description()}
                        onInput={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Button type="submit" class="btn mt-2">Save</Button>
            </Form>
        </Card>
    )
}

export default TodoAddForm