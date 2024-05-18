import { unwrapSync } from "../src";

test('synchronously unwrap exception', () => {
    const {res, err} = unwrapSync(() => {
        throw new Error('Bullshit error!');
    });

    expect(err).toBeInstanceOf(Error);
    expect(res).toBe(null);
});

test('synchronously unwrap value', () => {
    const {res, err} = unwrapSync(() => {
        return 1;
    });

    expect(err).toBe(null);
    expect(res).toBe(1);
});