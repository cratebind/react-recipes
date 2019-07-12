---
path: /
redirect_from:
  - /docs/
  - /docs/get-started/
---

This recipe book is intended to provide helpful, reusable React patterns for common use cases.

# Get Started

To run locally, clone the repo and run:

```bash
yarn install
yarn start
```

## Adding Components

Component pages are created from the `src/examples` directory using markdown files. You can use `src/examples/DynamicFields.md` as a template.

To create a new example:

1. Create a new markdown file in `src/examples`, like `MyExample.md`
2. Give it a unique `path` at the top of the markdown file, similar to how `DynamicFields.md` is set up
3. Add that path to `src/data/docs.yml`, either in an existing section or a new section

## Styles

All displays styles are provided from [Bootstrap](https://getbootstrap.com/) and are not included in the snippets themselves. They've been included in this guide just to apply some basic styles for each example.