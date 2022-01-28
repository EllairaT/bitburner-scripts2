import { NS } from "@ns"

export function getRandomInt(min: number, max: number): number {
	const lower = Math.min(min, max)
	const upper = Math.max(min, max)
	return Math.floor(Math.random() * (upper - lower + 1)) + lower
}
