import React from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import Input from "../components/Input";
import Button from "../components/Button";
import { AppDispatch, AppState } from "../redux/store";
import { useDispatch } from "react-redux";
import { login, register } from "../redux/authSlicer";
import { NotificationContext } from "../context/NotificationContext";
import { useSelector } from "react-redux";
type Validator = {
    [key: string]: (value: string) => string | undefined;
};
interface FormRef {
    username: {
        value: React.RefObject<HTMLInputElement>,
        error: React.RefObject<HTMLSpanElement>
    },
    lastName: {
        value: React.RefObject<HTMLInputElement>,
        error: React.RefObject<HTMLSpanElement>
    },
    firstName: {
        value: React.RefObject<HTMLInputElement>,
        error: React.RefObject<HTMLSpanElement>
    },
    password: {
        value: React.RefObject<HTMLInputElement>,
        error: React.RefObject<HTMLSpanElement>
    },
    [key: string]: {
        value: React.RefObject<HTMLInputElement>,
        error: React.RefObject<HTMLSpanElement>
    }
}
const validateForm: Validator = {
    firstName: (value: string) => { if (!value.trim()) return "Fisrt Name is required" },
    lastName: (value: string) => { if (!value.trim()) return "Last Name is required" },
    username: (value: string) => {
        if (!value.trim()) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email is not valid'
    },
    password: (value: string) => {
        if (!value.trim()) return 'Password is required'
        if (!(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(value)) return "Password need 1 hoa, 1 thường, 1 symbol đặc biệt và có ít nhất 8 kí tự "
    },
}
const useUserForm = (submitAction: (result: User) => void) => {
    const formRef = React.useRef<FormRef>({
        username: {
            value: React.createRef<HTMLInputElement>(),
            error: React.createRef<HTMLSpanElement>()
        },
        lastName: {
            value: React.createRef<HTMLInputElement>(),
            error: React.createRef<HTMLSpanElement>()
        },
        firstName: {
            value: React.createRef<HTMLInputElement>(),
            error: React.createRef<HTMLSpanElement>()
        },
        password: {
            value: React.createRef<HTMLInputElement>(),
            error: React.createRef<HTMLSpanElement>()
        }
    })
    const checkvalid = (data: object, refs: FormRef) => {
        const fields = Object.keys(data)
        let isPass = true
        const result = {} as User
        fields.forEach(field => {
            const { value, error } = refs[field]
            const inValid = validateForm[field](value.current?.value ?? "")
            if (!error.current) return
            if (inValid) {
                error.current.textContent = inValid
                error.current.style.display = "block"
                isPass = false
            } else {
                error.current.textContent = ""
                error.current.style.display = "none"
                result[field] = value.current?.value ?? ""
            }
        })
        return { isPass, result }
    }
    const hanleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement));
        const { isPass, result } = checkvalid(formData, formRef.current)
        if (!isPass) return;
        submitAction(result)
    }
    return { formRef, hanleSubmit }
}
export default function Auth(): React.JSX.Element {
    const { type } = useParams()
    const dispatch: AppDispatch = useDispatch()
    const { pushNotify } = React.useContext(NotificationContext)
    const { error, token } = useSelector((state: AppState) => state.auth)
    const navigate = useNavigate()
    const submitCallBack = (data: User) => {
        switch (type) {
            case "login": {
                const hanleLogin = async () => {
                    try {
                        await dispatch(login(data))
                        console.log(token);
                        
                       navigate("/")
                    } catch (e: unknown) {
                        console.error(e);
                        if (error)
                            pushNotify({
                                type: "SHOW",
                                payload: {
                                    title: error,
                                    type: "error",
                                    isShow: true,
                                    showTime: 3000
                                }
                            })
                    }
                }
                hanleLogin()
            }

                break;
            case "register": {
                const handleRegister = async () => {
                    try {
                        await dispatch(register(data))
                        navigate("/auth/login")
                    } catch (e: unknown) {
                        console.error(e);

                        pushNotify({
                            type: "SHOW",
                            payload: {
                                title: error,
                                type: "error",
                                isShow: true,
                                showTime: 3000
                            }
                        })
                    }
                }
                handleRegister()
            }


                break;
            case "forgot":
                break;
        }
    }
    const { formRef, hanleSubmit } = useUserForm(submitCallBack)
    return (<>
        <div className="container mb:max-w-none w-full h-full min-h-[100vh] flex flex-col items-center justify-center" >
            <div className="flex gap-4 items-center justify-between w-full ">
                <img loading="lazy" src="/images/decor.png" className="w-1/3 h-[25vh] max-h-[256px] object-cover rotate-180" />
                <form autoComplete="off" noValidate={true} onSubmit={(e) => hanleSubmit(e)} className="w-1/3 bg-[url(/images/modal.png)] bg-cover bg-no-repeat bg-center bg-fixed px-10 py-14 rounded-[2rem] shadow-lg shadow-[#f8f8f8]/30">
                    <img loading="lazy" src="/images/logo.png" alt="" className="w-[3.75rem] h-[3.75rem] object-cover mx-auto" />
                    <h1 className="h4 text-white text-center mt-6">Bento Social</h1>
                    <div className="flex-col flex gap-3 mt-10">
                        {type == "register" && <Input key={v4()} label="First Name" type="text" error={formRef.current.firstName.error} name="firstName" placeholder="First name" ref={formRef.current.firstName.value} />}
                        {type == "register" && <Input key={v4()} label="Last Name" type="text" error={formRef.current.lastName.error} name="lastName" placeholder="Last name" ref={formRef.current.lastName.value} />}

                        <Input key={v4()} label="User Name" type="text" name="username" placeholder="Username/Email" ref={formRef.current.username.value} error={formRef.current.username.error} />
                        {(type == "register" || type == "login" || type == "email") && <Input key={v4()} label="Password" type="password" error={formRef.current.password.error} name="password" placeholder="Password" hasToolTip={true} tooltip="Password must has 8 kí tự" ref={formRef.current.password.value} />}
                    </div>
                    <div className="flex items-center flex-col justify-start gap-3 mt-6">
                        <Button type="submit" text={type == "login" ? "Signin" : (type == "forgot" ? "Reset password" : "Create your account")} />
                        {type != "forgot" && <Button type="button" text="Sign with google" icon="/images/google-icon.svg" />}
                        {type == "login" && <span className="caption_r text-[#F8F8F8] text-opacity-80">Don’t have an account? <NavLink className="caption_sm" to="/auth/register"> Sign up, it’s free!</NavLink></span>}
                        {type == "register" && <span className="caption_r text-[#F8F8F8] text-opacity-80">Already have an account? <NavLink className="caption_sm" to="/auth/login"> Sign in</NavLink></span>}
                        {type == "forgot" && <span className="caption_r text-[#F8F8F8] text-opacity-80">Got your password? <NavLink className="caption_sm" to="/auth/login"> Sign in</NavLink></span>}
                    </div>
                </form>
                <img loading="lazy" src="/images/decor.png" className="w-1/3 h-[25vh] max-h-[256px] object-cover" />
            </div>
            <div className="flex flex-col gap-6 items-center justify-center mt-24">
                <span className="body text-[#F8F8F8]/50">Join over <strong className="text-[#F8F8F8]/85">2M</strong> global social media users</span>
                <img src="/images/avt_group.png" alt="avatar group" className="object-cover w-[11rem] h-10" />
            </div>
        </div >
    </>

    )
}