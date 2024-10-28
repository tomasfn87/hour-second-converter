function hhmmssToSeconds(time) {
    const parts = time.split(':');
    if (parts.length !== 3)
        return "Invalid format. Use HH:MM:SS.";
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const seconds = parseInt(parts[2]);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) ||
        hours < 0 || 
        minutes < 0 || minutes > 59 || 
        seconds < 0 || seconds > 59)
        return "Invalid format. Use HH:MM:SS.";
    return (hours * 3600) + (minutes * 60) + seconds;}

function secondsToHHMMSS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(secs).padStart(2, '0')}`;}

function detectAndConvert(input, RE_hhmmss, RE_Ss) {
    if (RE_hhmmss.test(input))
        return `${input} -> ${hhmmssToSeconds(input)}s`; 
    else if (RE_Ss.test(input)) {
        const s = parseInt(input.replace('s', ''));
        return `${input} -> ${secondsToHHMMSS(s)}`;}}

function main() {
    const input = process.argv[2];
    const RE_hhmmss = /^\d+:[0-5]\d:[0-5]\d$/;
    const RE_Ss = /^\d+s$/;
    if (input && (RE_hhmmss.test(input) || RE_Ss.test(input))) {
        console.log(detectAndConvert(input, RE_hhmmss, RE_Ss));
        return;}
    console.log("Input time in one of the formats: HH:MM:SS or <number>s.");
    console.log("Examples: 01:02:41 / 232s");}

main();
