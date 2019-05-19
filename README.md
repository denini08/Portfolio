### Portfolio

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![CircleCI](https://circleci.com/gh/Sphinxs/Portfolio/tree/master.svg?style=svg)](https://circleci.com/gh/Sphinxs/Portfolio/tree/master) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/sphinxs/portfolio/master.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/439e7fdb3e7d488a901223d56598b90f)](https://www.codacy.com/app/Sphinxs/Portfolio?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Sphinxs/Portfolio&amp;utm_campaign=Badge_Grade)

--- 

Portfolio written in HTML 5, CSS 3, Javascript and React. See the UI project no [Up Labs](https://www.uplabs.com/posts/art-in-form-of-code).

#### Contents

- [Setup](#Setup)

- [Usage](#Usage)

- [Image](#Usage)
  
- [Creators](Creators)

#### Setup

Clone this repository:

```sh
$ git clone https://github.com/Sphinxs/Portfolio.git
```

Open the repository:

```sh
$ cd Portfolio
```

Install the dependencies:

```sh
$ yarn install
```

Update the dependencies:

```sh
$ yarn upgrade package@version
```

#### Usage

- Start

Start the development server `yarn start`, and open [localhost:3000](http://localhost:3000/).

- Build

Build the project `yarn build`, and follow the instructions shown in the terminal. The build artifacts will be stored at **build** directory.

- Test

Test the project, `yarn test`. The Jasmine module its used to test the application.

- Eject

Eject the dependencies and settings, `yarn eject`, and opens [package.json](./package.json).

#### Image

Compress the images through Image Magick.

```sh
# install
$ sudo install install imagemagick

# compress
$ convert -quality 80 input.jpg output.jpg
```

Reference [here](https://ubuntuforums.org/showthread.php?t=1720675). Alternative to [PNG](https://github.com/Kjuly/pngcrush).

#### Credits

[Github.com/Sphinxs](https://github.com/Sphinxs)