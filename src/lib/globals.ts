let defaultColor = "#702a61"
export const _window = globalThis["window"]
export const _document = globalThis["document"]
export const globalNamespace = "vipera"

if (!_window[globalNamespace]) _window[globalNamespace] = {}
export var appGlobals = _window[globalNamespace]

export const React = _window["React"]
export const ReactDOM = _window["ReactDOM"]

export function setAppGlobal(key, value): void {
	appGlobals[key] = value
}

export function setDefaultColor(color: string) {
	defaultColor = color
}
