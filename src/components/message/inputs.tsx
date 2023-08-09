import { forwardRef } from "react";
import InputNumber from "rc-input-number";
import TextareaAutosize from "react-textarea-autosize";
import MessageAgent from "./messageAgent";
import styles from "./styles.module.scss";
import { useEffect } from "react";

export enum InputTypes {
    single = "single",
    multi = "multi",
    name = "name",
    email = "email",
    price = "price"
}

interface Type {
    agent: MessageAgent | null,
    onEnterKey: any,
    onChange: any
    // ref: any
}

// eslint-disable-next-line react/display-name
const Inputs = forwardRef(function ({ agent, onEnterKey, onChange }: Type, ref: any) {
    if (!agent) return;

    const placeholder = (() => {
        if (agent.currentContext?.placeholder) {
            const lang = agent.systemLanguage as string;
            return agent.currentContext?.placeholder[lang];
        }
        return "";
    })();

    const currencySymbol = (() => {
        if (agent.currentContext?.append_symbol) {
            return agent.currentContext?.append_symbol[agent.systemLanguage]
        }
        return "";
    })();

    const defaultPrice = (() => {
        if (agent.currentContext?.default_price) {
            return agent.currentContext?.default_price[agent.systemLanguage]
        }
        return "";
    })();


    // const emailValidation = (e: any) => {
    //     console.log(validate(e.target.value), e)
    //     agent.setButtonState(validate(e.target.value));
    // }

    if (agent.currentInputType === InputTypes.single) {
        // console.log("InputTypes.single");
        return <input placeholder={placeholder} ref={ref} onKeyDown={onEnterKey}></input>;
    } else if (agent.currentInputType === InputTypes.multi) {
        // console.log("InputTypes.multi");
        return <TextareaAutosize placeholder={placeholder} maxRows={10} onKeyDown={onEnterKey} ref={ref}></TextareaAutosize>
    } else if (agent.currentInputType === InputTypes.name) {
        // console.log("InputTypes.name");
        return <input placeholder={placeholder} ref={ref} onKeyDown={onEnterKey}></input>;
    } else if (agent.currentInputType === InputTypes.price) {
        // console.log("InputTypes.price");
        return (<>
            <label>{currencySymbol}</label>
            <input className={styles.priceInput} type="number" placeholder={placeholder}
                step={100} pattern={"\d*"} defaultValue={defaultPrice} onKeyDown={onEnterKey} ref={ref} />
        </>)
    } else if (agent.currentInputType === InputTypes.email) {

        return <input placeholder={placeholder} ref={ref} onKeyDown={onEnterKey} onChange={onChange} onFocus={onChange}></input>;
    }
    return <input ref={ref} onKeyDown={onEnterKey}></input>;
})

export default Inputs;