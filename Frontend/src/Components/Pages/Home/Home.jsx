import { Alert, Button, Card, Col, Container, Form, Row, Stack } from "solid-bootstrap";
import { createMemo, createSignal, For, onCleanup, Show } from "solid-js";
import { createStore } from "solid-js/store";
import { isError, setIsError } from "../../Shared/IsError/IsError";
import TodoCards from "../TodoCards/TodoCards";
import { setTodoList, todoList } from "../TodoListStore/TodoListStore";


const Home = () => {

    const [todo, setTodo] = createSignal("");
    const [description, setDescription] = createSignal("");

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

    const randomColor = [
        "#FF0000",
        "#FF7F00",
        "#FFFF00",
        "#00FF00",
        "#0000FF",
        "#4B0082",
        "#9400D3",
        "#FF0000",
        "#FF7F00",
        "#FFFF00",
        "#00FF00",
        "#0000FF",
    ]

    const [color, setColor] = createSignal(null);

    setInterval(() => {
        const gradient = `linear-gradient(-45deg, ${randomColor[Math.floor(Math.random() * randomColor.length)]} 0%, ${randomColor[Math.floor(Math.random() * randomColor.length)]} 100%)`;
        //    console.log(gradient);
        setColor(gradient);
    }, 2500);

    onCleanup(() => {
        clearInterval(color());
    })

    // console.log(color());

    const errorFunction = createMemo(() => {
        if (isError().isError) {
            return (
                <Alert variant={"danger"} show={isError().isError}
                    class="text-center mt-3"
                >
                    <Alert.Heading class="fs-6">
                        {isError().errorMessage}
                    </Alert.Heading>
                </Alert>
            )
        }
    })



    return (
        <main style={{
            //random gradient background color generator: https://cssgradient.io/
            background: color() || "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            transition: "all 0.5s ease-in-out"
        }}>


            <Container class="vh-100 overflow-auto">
                {
                    errorFunction()
                }
                <section class="d-flex d-flex justify-content-center align-items-start pt-5 h-100">
                    <Stack class="w-75">
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

                                <Button type="submit" class="mt-1">Submit</Button>
                            </Form>
                        </Card>
                        <Show when={todoList.length === 0}>
                            <Card class="p-4 bg-dark text-light mb-2">
                                <Card.Title>No Todo Found</Card.Title>
                            </Card>
                        </Show>

                        <Show when={todoList.length > 0}>
                            <Card class="p-4 bg-dark text-light mb-2">
                                <Card.Title>
                                    {todoList.length > 0 && `Total Todo: ${todoList.length}`}
                                </Card.Title>
                            </Card>
                        </Show>

                        <TodoCards
                            setDescription={setDescription}
                            setTodo={setTodo}
                        />
                    </Stack>
                </section>
            </Container>
        </main >
    );
}

export default Home;