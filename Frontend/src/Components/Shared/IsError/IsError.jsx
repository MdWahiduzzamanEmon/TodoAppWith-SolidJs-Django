import { createSignal } from "solid-js";

export const [isError, setIsError] = createSignal({
    isError: false,
    errorMessage: ""
});