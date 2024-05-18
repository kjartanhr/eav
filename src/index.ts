/**
 * Synchronously try calling a function, return its value, and if it fails,
 * return its error.
 * 
 * @param func function to unwrap.
 * @returns `{res, err}`. Either `res` will be of type T and `err` will be
 * `null` or `res` will be `null` and `err` will be `unknown` or an `Error`.
 */
export function unwrapSync<T>(
    func: () => T
): { res: T, err: null } | { res: null, err: unknown | Error } {
    try {
        const res = func();

        return { res, err: null };
    } catch (e) {
        return { res: null, err: e };
    }
}

/**
 * Asynchronously try calling a function, return its value, and if it fails,
 * return its error.
 * 
 * @param func async function to unwrap.
 * @returns Promise of `{res, err}`. Either `res` will be of type T and `err`
 * will be `null` or `res` will be `null` and `err` will be `unknown` or an
 * `Error`.
 */
export async function unwrapAsync<T>(
    func: () => Promise<T>
): Promise<{ res: T, err: null } | { res: null, err: unknown | Error }> {
    try {
        const res = await func();

        return { res, err: null };
    } catch (e) {
        return { res: null, err: e };
    }
}