# DATAflor Style Guide

This Monorepo contains all DATAflor UI react components. 

## Raw UI components
All react components are raw UI components consisting of just user interface styles, micro animations and display logic.
Each raw UI component is designed to be consumed by a wrapper component. 

## Full-fledged UI components
A wrapper component will extend a raw UI component with business logic.

## Display logic vs business logic
Business logic is everything that is not display logic. Display logic is e.g.:
 - showing a hint when input element has focus
 - hiding a hint when focus got lost

On the other side business logic is evaluating input, e.g.:
 - is the input valid (syntactical valid e-mail address oder address is not on blacklist)

Business logic then sets e.g.:
 - the state of that component to "error"
 - the message to the dedicated message key (translation key)
 - message variables (e.g. calculated values, etc.)

Display logic then takes care to trigger the display effects. e.g.:
 - set input outline to "red"
 - "shake" the input field
 - show input help text (again)
 - set focus element
 - scroll to affected element
 - disable button as long as input has not been fixed 
 - trigger show full page banner (optional) / trigger toast message (optional)
 - etc.

## npm packages
There is a npm package for each raw UI component. One sub dir of `/components` contains a single react component. A UI 
component ships styles (CSS / SCSS), structure (HTML), display logic (JavaScript) und CSS-in-JS 
(Styled-components, Emotion, JSS). Dependency to shared code needs to be expressed by package.json of that
UI component package.

## naming convention
All packages on github needs to be namespaced (npm scope) using the github organisation name as scope name. 
All package names and scope names needs to be lowercase.

## SemVer 2.0
All packages are released as stable, when stable (merged into main branch). 
The SemVer 2.0 specification (often used to communicate technical compatibility) is extended with design and
layout compatibility rules (major, minor, patch level changes).

### Breaking changes (Major)
Everything that may effect the layout is considered a breaking change. 
E.g. if the new version of component a UI component requires more or less space on the screen compared to the previous 
one has the potential to break the layout so it is considered a breaking change. All changes within its current shape 
(change of inner spacing, change of inner positioning of sub-elements etc.), is not a breaking change (BC). Renaming or 
dropping of props or CSS class names are breaking changes. This is not closed list, we may add more here.

### Feature (Minor)
Adding new properties or new behaviours to a UI component is considered a feature (minor release).
E.g. adding a prop, allowing a new prop value (which was not yet allowed).

### Bugfix and other (Patch)
Everything that is not a BC or a feature is a patch-level change.

## Install as a package consumer
Overview
1. Add registry to your project
2. Configure npm 
3. install a UI component 

### Add registry to your project
Add github.com as npm registry to your project (e.g. to DATAflor Cloud Portal project):
Personal setup
1. get a personal access token (classic) from github (`read:packages` permission)
2. add `//npm.pkg.github.com/:_authToken=PAT` to `~/.npmrc` (user home dir; replace PAT with your token)
Project setup
3. verify that you are using a current nodejs version: `node --version`
4. switch to at least 20.5.1: `nvm use v20.5.1`
5. verify that you are using a current npm version: `npm --version`
6. switch to at least 10.4.0: `npm install -g npm@10.4.0`

### Configure npm
add your personal access token (classic) to your local npm config

### Install a UI component 
To install a UI component to your project, e.g. the fictional component `ui_component_sample`:
1. install it `npm install @dataflor-ag/ui_component_sample@1.0.0`

## Maintainer
Details on how to create new components, update existing components and releasing packages are written in the [maintainer manual](./MAINTAINER.md).
