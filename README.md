```ts
import { unwrapAsync as unwrap } from "./lib/eav";

(async () => {
    const { res, err } = await unwrap(
        async () => await fetch('https://jsonplaceholder.typicode.comx/users/1')
    );

    if (err || !res) {
        if (err instanceof Error) {
            console.log('Error!', err.name, err.message);
            return;
        }

        console.log(err);
        return;
    }

    console.log(res.status);
})();
```