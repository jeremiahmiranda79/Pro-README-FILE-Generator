function renderInput(input) {
  if (input === '') {
    return 'N/A';
  }
  else {
    return input;
  }
}

function renderLicenseBadge(license) {
  if (license === 'none') {
    console.log('has none')
    return 'N/A';
  }
  else {
    switch(license) {
      case 'none':
        return 'N/A';
      case 'Apache Liscense 2.0':
        return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      case 'GNU General public License v3.0':
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      case 'MIT License':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'BSD 2-Clause "simplified" License':
        return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
      case 'BSD 3-Clause "New" or "Revised" License':
        return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      case 'Boost Software License 1.0':
        return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      case 'Creative Commons Zero v1.0':
        return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
      case 'Eclipse Public License 1.0':
        return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
      case 'GNU Lesser General Public License v3':
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      case 'Mozilla Public License 2.0':
        return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      case 'The Unlicense':
        return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      default :
        return 'error';
    }
  }
}

function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  }
  else {
    switch(license) {
      case 'Apache Liscense 2.0':
        return '(https://opensource.org/licenses/Apache-2.0)';
      case 'GNU General public License v3.0':
        return '(https://www.gnu.org/licenses/gpl-3.0)';
      case 'MIT License':
        return '(https://opensource.org/licenses/MIT)';
      case 'BSD 2-Clause "simplified" License':
        return '(https://opensource.org/licenses/BSD-2-Clause)';
      case 'BSD 3-Clause "New" or "Revised" License':
        return '(https://opensource.org/licenses/BSD-3-Clause)';
      case 'Boost Software License 1.0':
        return '(https://www.boost.org/LICENSE_1_0.txt)';
      case 'Creative Commons Zero v1.0':
        return '(http://creativecommons.org/publicdomain/zero/1.0/)';
      case 'Eclipse Public License 1.0':
        return '(https://opensource.org/licenses/EPL-1.0)';
      case 'GNU Lesser General Public License v3':
        return '(https://www.gnu.org/licenses/gpl-3.0)';
      case 'Mozilla Public License 2.0':
        return '(https://opensource.org/licenses/MPL-2.0)';
      case 'The Unlicense':
        return '(http://unlicense.org/)';
    }
  }
}

function renderBadges(badges) {
  let myBadges = [];

  if (badges.length === 0) {
    return 'N/A';
  }
  else {
    //https://ileriayo.github.io/markdown-badges/
    if (badges.includes('javascript')) {
      myBadges.push('![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)');
    }

    if (badges.includes('html')) {
      myBadges.push('![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)');
    }

    if (badges.includes('css')) {
      myBadges.push('![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)')
    }

    if (badges.includes('bootstrap')) {
      myBadges.push('![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)');
    }

    if (badges.includes('nodejs')) {
      myBadges.push('![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)')
    }

    if (badges.includes('react')) {
      myBadges.push('![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)');
    }

    if (badges.includes('jquery')) {
      myBadges.push('![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)');
    }

    if (badges.includes('express')) {
      myBadges.push('![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)');
    }

    if (badges.includes('mysql')) {
      myBadges.push('![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)');
    }

    if (badges.includes('mongo-db')) {
      myBadges.push('![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)');
    }

    if (badges.includes('microsoft-sql-server')) {
      myBadges.push('![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)');
    }

    if (badges.includes('maria-db')) {
      myBadges.push('![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)');
    }

    if (badges.includes('nodemon')) {
      myBadges.push('![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)');
    }

    if (badges.includes('google-chrome')) {
      myBadges.push('![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)');
    }

    if (badges.includes('insomnia')) {
      myBadges.push('![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)');
    }

    if (badges.includes('npm')) {
      myBadges.push('![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)');
    }

    if (badges.includes('heroku')) {
      myBadges.push('![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)');
    }

    if (badges.includes('visual-studio')) {
      myBadges.push('![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)');
    }

    if (badges.includes('windows-11')) {
      myBadges.push('![Windows 11](https://img.shields.io/badge/Windows%2011-%230079d5.svg?style=for-the-badge&logo=Windows%2011&logoColor=white)');
    }

    if (badges.includes('github')) {
      myBadges.push('![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)');
    }

    if (badges.includes('git')) {
      myBadges.push('![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)');
    }

    if (badges.includes('github-pages')) {
      myBadges.push('![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white');
    }

    return myBadges.join(' ');
  }
}

function generateMarkdown(data) {
  return `# ${renderInput(data.title)}
    
  ## License
  ${renderLicenseBadge(data.license)} \n 
  ${renderLicenseLink(data.license)}

  ## Description
  ${renderInput(data.description)}

  ## Table of Contents
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Badges](#badges)
  - [Features](#features)

  ## Installation
  Clone: https://github.com/${data.username}/${data.title}\n
  ${renderInput(data.installation)} 

  ## Usage
  ${renderInput(data.usage)}

  ## Contribution
  I used my README.md file generator to create this README.md 😉\n
  GitHub: https://github.com/${data.username}/Pro-README-FILE-Generator\n
  Email: ${data.email}

  ## Test
  ${renderInput(data.test)}

  ## Badges
  ${renderBadges(data.badges)}

  ## Features
  TODO: Manually add you features here(for now 😉)!
  `;
}

module.exports = generateMarkdown;