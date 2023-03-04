import { A } from "@solidjs/router";
import Styles from "../../Authentication/Authentication.module.css";
const SignOut = () => {
    return (
        <section class={`${Styles.gradientCustom}`}>
            <div class="container py-3 h-100">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-2 mt-md-3 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                    <p class="text-white-50 mb-5">Please provide your details!</p>

                                    <div class="
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                        flex-column flex-md-row
                                        gap-3
                                    ">
                                        <div class="form-outline form-white mb-4">
                                            <input type="text" id="typeFirstNameX" class="form-control form-control-lg" />
                                            <label class="form-label" for="typeFirstNameX">First Name</label>
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <input type="text" id="typeLastNameX" class="form-control form-control-lg" />
                                            <label class="form-label" for="typeLastNameX">Last Name</label>
                                        </div>

                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="text" id="typeUserNameX" class="form-control form-control-lg" />
                                        <label class="form-label" for="typeUserNameX">User Name</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                                        <label class="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>

                                    {/* <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}

                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>

                                </div>

                                <div>
                                    <p class="mb-0">Don't have an account? <A href="/logIn" class="text-white-50 fw-bold text-decoration-none">Sign In</A>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SignOut;