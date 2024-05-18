# eav - errors as values

The pattern of exceptions in languages like JavaScript (+ TypeScript), Java, C#, etc. can create confusing control flow that's unpredictable and hard to work with.

This package aims to help JS and TS developers "unwrap" functions that throw errors into a simple combination of `res` and `err` variables that can then be handled accordingly with guard clauses.

Below is an example:

```ts
import { unwrapAsync as unwrap } from "@spaugur/eav";

(async () => {
    const { res, err } = await unwrap(async () => {
        throw new Error('Something bad happened.');
    });

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

The above could easily be adapted to deal with the errors that `fetch` might throw, something almost every JS/TS developer has to deal with at some point.

We use this package internally at [Spaugur](https://spaugur.com/).

You could also totally copy the source code into your own projects. It's tiny!

(c) 2024 Kjartan Hrafnkelsson, under MIT license.