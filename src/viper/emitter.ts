import { NS } from "@ns"
import { setAppGlobal, appGlobals } from "lib/globals"

export async function init(): Promise<void> {
	const url = "https://cdn.jsdelivr.net/npm/mitt@3.0.0/dist/mitt.mjs"

	if (appGlobals["Mitt"]) {
		throw new Error("Mitt is already running.")
	}

	let EE = await import(url)
	if (EE) setAppGlobal("Mitt", EE)
}
