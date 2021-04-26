several components
tests
 - create a test and run it with "jest". create a test command in the package.json
- build + deployment
   - bundles
   - modules

- [x] init github
- [x] add a github action that runs `test` script
- [x] install webpack as a dev dependenty
- [x] create a npm script that builds sources.js
- [x] create an entry point for webpack
- [x] build webpack -> dist.bundle
- [x] html -> add bundle & use namespace module
- [x] imports and exports - using ES6
- [x] add transpiling (webpack & babel) so that IE could use it
- [x] test jest 
- [x] add gated checkin (with review and GA check)
- [x] button: fit width to content
- [x] move button creation logic to a class
- [x] create a class deriving from the button, make different appearance + add the `color` option
- [x] styles: migrate from `CSS` to `LESS`
- [x] styles: create separate styles bundle
- [x] optimize `npm pack`
- [ ] create two build tasks (`dev` and `product`) using `gulp`
  - [ ] the `dev` task should contain non-minimized code
  - [ ] the `product` task should add a header containing version and copyright