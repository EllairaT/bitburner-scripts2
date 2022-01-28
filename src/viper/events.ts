enum UIEvents {
	SHOW,
	HIDE,
	CLOSE,
}

enum LogLevels {
	SUCCESS,
	WARN,
	ERROR,
	INFO,
	DEBUG,
}

enum Events {
	EVENT_FIRED,
	EMITTER_INIT,
	EVENT_REMOVED,
	UI_INIT,
	MOUNTED,
	UNMOUNTED,
}

export type UIEventsStrings = keyof typeof UIEvents
export type LogLevelsStrings = keyof typeof LogLevels
export type EventsStrings = keyof typeof Events
