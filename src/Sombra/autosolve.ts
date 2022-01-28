/** @param {NS} ns **/
import { NS, ProcessInfo } from "@ns"

import * as contracts from "Sombra/CCFunctions"

let metadata = contracts.codingContractTypesMetadata
// type: type of problem (e.g. Unique Paths in a Grid I)
// data: data given by .cct
// server: server hosting current .cct
// contract:.cct name

export function solve(
	type: string,
	data: any,
	server: string,
	contract: string,
	ns: NS
): string | boolean {
	let current = metadata.filter((c) => c.name === type).pop()

	ns.tprint("solving: ", current.name)
	let solution = current.solver(data)

	return ns.codingcontract.attempt(solution, contract, server, {
		returnReward: true,
	})
}
