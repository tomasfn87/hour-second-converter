export const RegExp = {
    "hhMmSs": /^\d+:[0-5]\d:[0-5]\d$/,
    "Ss": /^\d+s$/};

export const detectAndConvert = (input, REHhMmSs, RESs) => {
    if (RegExp.hhMmSs.test(input))
        return `${input} -> ${hhMmSsToSeconds(input)}s`; 
    else if (RegExp.Ss.test(input)) {
        const s = parseInt(input.replace('s', ''));
        return `${input} -> ${secondsToHhMmSs(s)}`;}
    else
        return undefined;}

export const hhMmSsToSeconds = (time) => {
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

export const secondsToHhMmSs = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(1, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(secs).padStart(2, '0')}`;}
