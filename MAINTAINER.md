# Maintaining UI packages

## Create a new package
Run:
```
npx lerna create df-ui-componentnamehere1
```
`df-ui-` is the prefix that should be used for  all User Interface components (react components).
`componentnamehere1` should be replaced with a meaning full component name (semantic!). Multi-word with dashes is ok.

## Manage dependencies
Your UI component package can have dependencies as normal packages do. To link to another local package use: 

```
dependencies: {
    "df-ui-componentnamehere2": "file:../df-ui-componentnamehere2"
}
```

in your package.json of package 1: 
`packages/df-ui-componentnamehere1/package.json` .

## Release Process

The release process contains the following steps 

- **releasing a package** to Github Packages, after detecting a delta between package registry and git tag (registry vs repo); CI/CD pipeline
- **versioning a package** as git tags, conventional commit messages and updated package.json per package

The CI / Pipeline is using `lerna publish` to automate the release (to public a package to the Github Packages package registry).

The developer will use `lerna version` in an interactive mode to judge per package if the change is a major-, minor- or patch-level change. Lerna will ask you for changed packages only.

The lerna tool is taking care that the git commit message follows the git commit message convention, it updates the package.json for each updated package and commits git tags with version number for each updated package. 

Versioning schema is set to "independent", so that the lifecycle of each package is independent from each other package.

