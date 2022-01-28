/** @param {NS} ns **/
import { NS, ProcessInfo } from "@ns"
import { getServers } from "scan"
import { solve } from "Sombra/autosolve"

function findContracts(
	current: { name: string; depth: number },
	ns: NS
): string {
	let output = ""
	let name = current.name
	ns.ls(name, ".cct").forEach((ctName) => {
		let cc = ns.codingcontract
		let type = cc.getContractType(ctName, name)
		let data = cc.getData(ctName, name)
		let status = ""

		// message to terminal
		output += [
			status,
			`<font color=white>from: </font>`,
			`<font color='lime'>${name}</font><br>`,
			`-------|<font color='yellow'>${ctName}</font><br>`,
			`-------|<font color='fuchsia'>${cc.getContractType(
				ctName,
				name
			)}</font><br>`,
			`-------|<font color='cyan'>${cc.getNumTriesRemaining(
				ctName,
				name
			)} tries remaining.</font><br>`,
		].join("")

		// attempt to solve
		let solved = solve(type, data, name, ctName, ns)

		if (solved) {
			output += `<font color=green>SOLVED 🎉🎉🎉</font><br>`
			output += `<font color=#99FF99>${solved}</font>`
		} else {
			output += `<font color=red>could not solve coding contract 😔</font>`
		}
		output += "<br><br>"
	})
	return output
}

export async function main(ns: NS): Promise<void> {
	ns.disableLog("ALL")
	let result = ""
	let servers

	servers = getServers(ns)

	servers.forEach((s) => {
		result += findContracts(s, ns)
	})

	if (result === "") {
		result = "<font color=white>No coding contracts found 😀</font>"
	}
	const list = document.getElementById("terminal")
	list?.insertAdjacentHTML("beforeend", result)
}
