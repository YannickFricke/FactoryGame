import createDebugLogger, { Debugger } from 'debug';

/**
 * Creates a new debug logger.
 *
 * @export
 * @param {string} name The name of the logger.
 * @return {Debugger} The debug logger.
 */
export function createLogger(name: string): Debugger {
	return createDebugLogger(name);
}
