import { Button, Card, Col, Row } from "solid-bootstrap";
import { For } from "solid-js";
import { setTodoList, todoList } from "../TodoListStore/TodoListStore";

const TodoCards = ({ setDescription, setTodo }) => {

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

    return (
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
    )
}

export default TodoCards;