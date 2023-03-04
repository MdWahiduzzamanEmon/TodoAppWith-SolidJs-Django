import { Button, Card, Col, Container, Form, Row, Stack } from "solid-bootstrap";
import { createMemo, createSignal, For, onCleanup, Show } from "solid-js";
import { createStore } from "solid-js/store";


const Home = () => {

    const [todoList, setTodoList] = createStore(
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

    const [todo, setTodo] = createSignal("");
    const [description, setDescription] = createSignal("");

    const handleTodoAdd = (e) => {

        e.preventDefault();

        console.log(todo(), description());
        if (todo() === "" || description() === "") {
            alert("Please fill all the fields.");
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

    const handleDeleteTodo = (item) => {
        // console.log(item, i);
        const newTodoList = todoList.filter((todo) => todo.id !== item.id);
        setTodoList(newTodoList);

    }

    const handleEditTodo = (item) => {
        // console.log(item);
        setTodo(item.title);
        setDescription(item.description);

        const newTodoList = todoList.filter((todo) => todo.id !== item.id);
        setTodoList(newTodoList);
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
        const gradient = `linear-gradient(-145deg, ${randomColor[Math.floor(Math.random() * randomColor.length)]} 0%, ${randomColor[Math.floor(Math.random() * randomColor.length)]} 100%)`;
        //    console.log(gradient);
        setColor(gradient);
    }, 2500);

    onCleanup(() => {
        clearInterval(color());
    })

    // console.log(color());



    return (
        <main style={{
            //random gradient background color generator: https://cssgradient.io/
            background: color() || "linear-gradient(-145deg, #FF0000 0%, #FF7F00 100%)",
        }}>
            <Container class="vh-100 overflow-auto">
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

                        <Row>

                            <For each={todoList}>
                                {(item) => (
                                    <Col class="col-12 col-md-6 col-lg-4">
                                        <Card class="p-4 bg-dark text-light mb-2 position-relative" key={item.id}
                                        >
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.description}</Card.Text>
                                            <Button class="btn btn-danger" onClick={() => {
                                                handleDeleteTodo(item)
                                            }}>Delete</Button>
                                            <div class="
                                                        position-absolute
                                                        top-0
                                                        end-0
                                                        mt-2
                                                        me-2
                                                            "
                                            >
                                                <Button class="btn btn-success"
                                                    onClick={() => {
                                                        handleEditTodo(item)
                                                    }}
                                                >Edit</Button>
                                            </div>
                                        </Card>
                                    </Col>
                                )}
                            </For>

                        </Row>
                    </Stack>
                </section>
            </Container>
        </main >
    );
}

export default Home;