import React, { useContext } from "react";
import { ColorModeContext } from "./ColorMode";
import {StyledSwitch } from  "./style"


export function DarkModeSwitch() {
    const context = useContext(ColorModeContext);

    return (
        <StyledSwitch>
            <input id="darkmode" type="checkbox" onChange={() => {
                context.toggleMode();
            }} />
            <label
                htmlFor="darkmode"
                className="darkmode-switch"
            >
                <span>🌙</span>
                <span>☀️</span>
            </label>
        </StyledSwitch>
    )
}