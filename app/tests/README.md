# API Testing

All the new features being developed will be tested in all the relevant aspects, starting with API testing using Mocha.

A README note will be present with all the test cases describing the module under test, expected output & test cases involved.
A complete end to end test as well as unit test for particular modules will be added.

## Proposed folder structure

Inside `test` folder, we will be creating the following structure:

```
- api
  - moduleName
- utils
  - fixtures
  - helpers
  - spies
  - stubs
```

***Note:** Function specific unit tests and sub modules if any, will be covered under different test suites*

## Good things to know

- Folder and file naming will follow camelCase convention throughout.
