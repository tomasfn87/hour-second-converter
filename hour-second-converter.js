function hhmmssToSeconds(time) {
    const parts = time.split(':');
    if (parts.length !== 3)
        return "Invalid format. Use HH:MM:SS.";
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const seconds = parseInt(parts[2], 10);
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

function detectAndConvert(input) {
    const RE_hhmmss = /^\d+:\d{2}:\d{2}$/; 
    if (RE_hhmmss.test(input))
        return `${input} -> ${hhmmssToSeconds(input)}s`; 
    else if (/^\d+s$/.test(input)) {
        const sec = parseInt(input.replace('s', ''), 10);
        return `${input} -> ${secondsToHHMMSS(sec)}`; }
    return "Invalid format.";}

function main() {
    const input = process.argv[2];
    if (input)
        console.log(detectAndConvert(input));
    else
        console.log("Accepted formats: HH:MM:SS or <number>s.");}

main();