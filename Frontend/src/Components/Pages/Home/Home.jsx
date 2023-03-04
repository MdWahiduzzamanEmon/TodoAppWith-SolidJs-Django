import { useNavigate } from "@solidjs/router";
import { Alert, Button, Card, Container, Stack } from "solid-bootstrap";
import { createMemo, createSignal, For, onCleanup, Show } from "solid-js";
import { isError } from "../../Shared/IsError/IsError";
import TodoAddForm from "../TodoAddForm/TodoAddForm";
import TodoCards from "../TodoCards/TodoCards";
import { todoList } from "../TodoListStore/TodoListStore";


const Home = () => {
    const navigate = useNavigate();
    const [todo, setTodo] = createSignal("");
    const [description, setDescription] = createSignal("");

    const randomColor = [];
    const [color, setColor] = createSignal(null);

    setInterval(() => {
        //generate random gradient color
        for (let i = 0; i < 6; i++) {
            const randomColorCode = Math.floor(Math.random() * 16777215).toString(16);
            randomColor.push(`#${randomColorCode}`);
        }

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


            <Container class="vh-100 overflow-auto position-relative">
                {
                    errorFunction()
                }
                <section class="d-flex d-flex justify-content-center align-items-start pt-5 h-100">
                    <Stack class="w-75">
                        {/* //add todo  */}
                        <TodoAddForm
                            todo={todo}
                            setTodo={setTodo}
                            description={description}
                            setDescription={setDescription}

                        />

                        {/* //not found todo */}
                        <Show when={todoList.length === 0}>
                            <Card class="p-4 bg-dark text-light mb-2">
                                <Card.Title>No Todo Found</Card.Title>
                            </Card>
                        </Show>

                        {/* //total todo */}
                        <Show when={todoList.length > 0}>
                            <Card class="p-4 bg-dark text-light mb-2">
                                <Card.Title>
                                    {todoList.length > 0 && `Total Todo: ${todoList.length}`}
                                </Card.Title>
                            </Card>
                        </Show>

                        {/* //todo cards  */}

                        <TodoCards
                            setDescription={setDescription}
                            setTodo={setTodo}
                        />
                    </Stack>
                </section>
                //logout

                <Button
                    class="position-absolute top-0 end-0 m-3"
                    variant="danger"
                    onClick={() => {
                        localStorage.setItem("isAuthenticated", false);
                        navigate("/login");
                    }}
                >
                    Sign Out
                </Button>

            </Container>
        </main >
    );
}

export default Home;