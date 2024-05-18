import { unwrapAsync } from "../src";

test('asynchronously unwrap exception', async () => {
    const {res, err} = await unwrapAsync(async () => {
        throw new Error('Bullshit error!');
    });

    expect(err).toBeInstanceOf(Error);
    expect(res).toBe(null);
});

test('asynchronously unwrap value', async () => {
    const {res, err} = await unwrapAsync(async () => {
        return 1;
    });

    expect(err).toBe(null);
    expect(res).toBe(1);
});