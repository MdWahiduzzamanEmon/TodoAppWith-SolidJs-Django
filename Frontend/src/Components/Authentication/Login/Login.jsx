import { A, useNavigate } from "@solidjs/router";
import { Alert, Button, Container, Form } from "solid-bootstrap";
import { createEffect, createMemo, createResource, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import Styles from "../../Authentication/Authentication.module.css";

let email = "wahedemon09@gmail.com";
let password = "123456";

export const [isError, setIsError] = createSignal({
    isError: false,
    errorMessage: ""
});



const Login = () => {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = createStore({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        if (userInfo.email === "" || userInfo.password === "") {
            // alert("Please fill all the fields.");
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

        if (userInfo.email === email && userInfo.password === password) {
            navigate('/todo');
            localStorage.setItem("isAuthenticated", true);
        } else {
            // alert("Email or Password is incorrect. Please try again.");
            localStorage.setItem("isAuthenticated", false);
            setIsError({
                isError: true,
                errorMessage: "Email or Password is incorrect. Please try again."
            })

            setTimeout(() => {
                setIsError({
                    isError: false,
                    errorMessage: ""
                })}
                , 3000)

        }
    }



    const errorFunction = createMemo(() => {
        if (isError().isError) {
            return (
                <Alert variant={"danger"} show={
                    isError()
                }
                    class="text-center"

                >
                    <Alert.Heading class="fs-6">
                        {isError().errorMessage}
                    </Alert.Heading>
                </Alert>
            )
        }
    })

    return (
        <section class={`${Styles.gradientCustom} vh-100`}>

            <Container class=" py-5 h-100">

                {errorFunction()}

                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">

                                <Form class="mb-md-3 mt-md-2 pb-5" onSubmit={handleSubmitLogin}>

                                    <h2 class="fw-bold mb-2 text-uppercase">SignIn</h2>
                                    <p class="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg" name="email" onChange={handleChange} />
                                        <label class="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" name="password" onChange={handleChange} />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>

                                    {/* <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}

                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                </Form>

                                <div>
                                    <p class="mb-0">Don't have an account? <A href="/signOut" class="text-white-50 fw-bold text-decoration-none">Sign Up</A>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Login;