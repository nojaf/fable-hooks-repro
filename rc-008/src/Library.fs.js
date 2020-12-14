import { useFeliz_React__React_useElmish_Static_645B1FB7 } from "./.fable/Feliz.UseElmish.1.5.0/UseElmish.fs.js";
import { Cmd_none } from "./.fable/Fable.Elmish.3.0.6/cmd.fs.js";
import { createElement } from "react";
import * as react from "react";
import { render } from "react-dom";

export function Title(TitleProps) {
    const name = TitleProps.name;
    const patternInput = useFeliz_React__React_useElmish_Static_645B1FB7((_arg1) => [0, Cmd_none()], (_arg3, _arg2) => [1, Cmd_none()], []);
    return react.createElement("h1", {}, "rc-008");
}

export const app = document.querySelector("#app");

render(createElement(Title, {
    name: "",
}), app);

