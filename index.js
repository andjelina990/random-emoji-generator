import chalk from 'chalk';

import randomColor from 'randomcolor';
const random = '#' + Math.floor(Math.random() * 16777216).toString(16);

const row = [
  `   ##############################
   ###############################
   ###############################
   #####                    ######
   #####                    ######
   #####   ${random}          ######
   #####                    ######
   ###############################
   ###############################
   ###############################
  `,
];
if (process.argv < 3) {
  console.log(chalk.hex(random).bold(row));
} else {
  console.log(
    chalk.hex(
      randomColor({
        luminosity: process.argv[3],
        hue: process.argv[2],
      }),
    )(row),
  );
}
// console.log(
//   randomColor({
//     luminosity: 'light',
//     hue: 'blue',
//   }),
// );
