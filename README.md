# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This command-line application takes in information about employees on a team and generates an HTML webpage that displays summaries for each person. Each card contains the employee's basic info, including their email and GitHub profile.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## Installation

Ensure that you have Node.js installed, v16 is best. You can follow [this](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs) guide for installation instructions.

Clone this repository:

>`git clone git@github.com:sarasg89/team-creator.git`

Navigate into the directory where you cloned this repository:

>`cd ./team-creator`

Run npm install to retrieve dependencies:

>`npm install`

## Usage

Open your terminal and navigate to the directory
>`cd ./team-creator`  

Run node to initialize the application
> `node index.js`

Answer the questions when prompted. After the last question, an HTML file will be created saved in the folder called dist.

https://user-images.githubusercontent.com/118869836/222993480-bd636eb9-2282-4dfb-8bb9-cbf837b9a486.mp4

Here is a [link](https://drive.google.com/file/d/11YGgV0NvMpHKpT2rhk4ZxwQKSVB6Gqnn/view?usp=sharing) to the video.

### Screenshots

![terminal](./images/new%20terminal.png)

![generated HTML](./images/new%20generated%20HTML.png)

![final page](./images/new%20generated%20page.png)

## Credits

In order to create mock tests for inquirer, I read several Stack Overflow threads, the most relevant being [this one](https://stackoverflow.com/questions/49862039/how-to-write-unit-tests-for-inquirer-js) and [this answer](https://stackoverflow.com/a/73940846) in another thread.

In order to create a mock test for day.js, I used the block of code found in [this](https://stackoverflow.com/a/63377110) answer to a Stack Overflow tread.

NPM packages used:

- [inquirer](https://www.npmjs.com/package/inquirer)
- [email validator](https://www.npmjs.com/package/email-validator)
- [day.js](https://day.js.org/)

## License

MIT License

Copyright (c) 2023 sarasg89

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
