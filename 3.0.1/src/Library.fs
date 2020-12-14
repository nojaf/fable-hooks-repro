module App

open Fable.React
open Feliz
open Feliz.UseElmish
open Elmish

[<ReactComponent>]
let Title (name: string) =
    let init _ = 0, Cmd.none
    let update _ _ = 1, Cmd.none
    let model, dispatch = React.useElmish (init, update, [||])
    h1 [] [ str "3.0.1" ]

let app = Browser.Dom.document.querySelector "#app" :?> Browser.Types.HTMLElement
ReactDOM.render(Title "", app)