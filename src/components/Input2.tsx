import React from "react";
export default function Input2({ label, type, value, icon }: { label: string, type: string, value: string, icon: string }): React.JSX.Element {
    return (<>
        <fieldset className="flex items-center justify-start py-4 gap-4 border-b border-bsColor/60 w-full">
            <label className="flex max-w-[20%] w-full items-center ustify-start gap-2 base_14_r text-bsColor/70 text-opacity-80" htmlFor="">
                <img src={icon} /> {label}
            </label>
            {
                type == "input" && <input autoComplete="off" value={value} type="text" name="name"
                    className="base_14_r w-full relative z-0 outline-none text-bsColor bg-[#383838] px-5 py-4" />
            }
            {
                type == "textarea" && <textarea autoComplete="off" name="name" rows={10}
                    className="base_14_r w-full relative z-0 outline-none text-bsColor bg-[#383838] px-5 py-4">
                    {value}
                </textarea>
            }
            {
                type == "checkbox" && <input style={{ appearance: "none", backgroundColor: "rgba(248,248,248 , .05)" }} type="range" min="0" max="1" name="name" id="name"
                    className="w-10 h-5 rounded-3xl checkbox" />
            }

        </fieldset>
    </>)
}