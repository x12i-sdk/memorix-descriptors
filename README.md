# @x12i/memorix-descriptors usage example

Manage Memorix entity, list, and item descriptors in Catalox.

This consuming application demonstrates **build and validate canonical association property names** using the published npm package, pinned to `1.38.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Publish an entity descriptor to Catalox.
- Retrieve the list and item descriptors needed by a viewer.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-descriptors)
- [Implementation monorepo](https://github.com/x12i/memorix-descriptors)
- [Reviewed package source](https://github.com/x12i/memorix-descriptors/tree/2cdc1fda7ba2ca31875c21edb41208bb3b6e5491/.)

The current source snapshot has a different manifest version from the pinned npm dependency. This example is validated against the installed npm release.

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example uses synthetic records and local callbacks or in-memory state. It checks the demonstrated consumer behavior of the pinned npm release. It does not connect to MongoDB, Catalox, a device, an AI provider, or a deployed pipeline service.
