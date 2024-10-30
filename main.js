import { detectAndConvert, RegExp } from './hour-second-converter.js';

(() => {
    const input = process.argv[2];
    if (input && (RegExp.hhMmSs.test(input) || RegExp.Ss.test(input))) {
        console.log(detectAndConvert(input));
        return;}
    console.log("Input time in one of the formats: HH:MM:SS or <number>s.");
    console.log("Examples: 01:02:41 / 232s");})();
