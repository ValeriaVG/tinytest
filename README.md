# Tiny Jest

Minimalistic library to run Jest-like tests in any JS environment: browser, node or even deno.
Perfect to run in sandboxes

## Features

- Zero dependency
- Ultra fast
- Clean Jest-like api
- Runs in browser
- Provides jest-like "expect" library, but can be used with any assert/expect library

## Limitations

- Doesn't include cli-runner
- Included "expect" library has limited amount of matchers, much less than original Jest expect

## Installation

### NPM:

```
yarn add tiny-jest
```

or

```
npm install tiny-jest
```

### CDN:

```html
<script src="https://unpkg.com/tiny-jest/dist/bundle.js"></script>
```

### Deno:

```js
import {
  Test,
  expect,
  prettify,
} from "https://raw.githubusercontent.com/ValeriaVG/tiny-jest/1.0/mod.ts ";

const { it, run, title } = new Test("basic");

it("2+2=4", () => {
  expect(2 + 2).toBe(4);
});

run().then(prettify);
```