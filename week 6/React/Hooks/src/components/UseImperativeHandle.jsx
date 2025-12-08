import { useImperativeHandle } from "react";
import { useRef } from "react";
import { forwardRef } from "react";

function UseImerativeHandle(){
    const inputRef = useRef();
    return(
        <>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current.focusInput()}>Focus Field</button>
            <button onClick={() => inputRef.current.clearInput()}>Clear</button>
        </>
    )
}
export default UseImerativeHandle;

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, ()=> ({
        focusInput: () => {
            inputRef.current.focus();
        },
        clearInput: () => {
            inputRef.current.value = "";
        }
    }));
    return <input ref={inputRef} type="text" placeholder="Type something..." />
})