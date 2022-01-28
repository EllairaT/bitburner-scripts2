import { NS } from "@ns"
import {
	React,
	ReactDOM,
	_document,
	globalNamespace,
	setAppGlobal,
	appGlobals,
} from "lib/globals"

import WindowComponent from "viper/components/WindowComponent"
import { init } from "viper/emitter"

async function importStyledComponents(): Promise<void> {
	const url =
		"https://unpkg.com/styled-components/dist/styled-components.min.js"

	const module = await import(url)
	if (module) {
		setAppGlobal("styled", module)
	} else {
		throw new Error("Could not import Styled Components")
	}
}

function App(): JSX.Element {
	return (
		<div id="App">
			<WindowComponent />
			{/* <style type="text/scss">{props.style}</style> */}
		</div>
	)
}

export async function main(ns: NS): Promise<void> {
	init()
	let body = _document.querySelector("body")
	body.insertAdjacentHTML("afterbegin", `<div id=${globalNamespace}></div>`)

	ReactDOM.render(<App />, _document.getElementById(`${globalNamespace}`))
}
