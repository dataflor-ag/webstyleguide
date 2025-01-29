# Maintaining UI packages

## Create a new package

Run:

```
npx lerna create @dataflor-ag/df-ui-componentnamehere1
```

`@dataflor-ag/df-ui-` is the prefix that should be used for all User Interface components (react components).
`componentnamehere1` should be replaced with a meaning full component name (semantic!). Multi-word with dashes is ok.

Update package.json (of your new package)
Set license:

```
  "license": "UNLICENSED",
```

Set config for publishing:

```
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/@dataflor-ag"
  },
```

Set build command:

```
"scripts": {
  [...]
  "prepublishOnly": "npm run build"
},
```

## Manage dependencies

Your UI component package can have dependencies as normal packages do. To link to another local package use:

```
dependencies: {
    "@dataflor-ag/df-ui-componentnamehere2": "file:../df-ui-componentnamehere2"
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

## Versionbump

Please avoid versionbumps for unstable releases! Please use lernas feature "custom prerelease" for experiments or technical tests (...-alpha.0, ...-alpha.1, usw). Use normal releases for "stable" releases only.

## Update a package

1. `npm install`
2. Commit your changes
3. Create a pull request
4. `npx lerna version --include-merged-tags`
5. `npm install`
6. Commit the changed package- and package-lock files
7. After approval merge
8. Under Tab Actions is the LiveTicker if everything worked
