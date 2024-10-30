import { runTestArray } from './run-test-array.js';

import { detectAndConvert, hhMmSsToSeconds, secondsToHhMmSs }
    from '../hour-second-converter.js';

[{
    title:   'Detect and Convert (detectAndConvert)',
    fn:      detectAndConvert,
    testArr: [
        {
            value: "0:00:00",
            result: "0:00:00 -> 0s"
        },
        {
            value: "00:00:00",
            result: "00:00:00 -> 0s"
        },
        {
            value: "0s",
            result: "0s -> 0:00:00"
        },
        {
            value: "00:00",
            result: undefined
        },
        {
            value: "0:60:00",
            result: undefined
        },
        {
            value: "0:00:60",
            result: undefined
        },
        {
            value: "time",
            result: undefined
        },
        {
            value: 10,
            result: undefined
        },
        {
            value: "",
            result: undefined
        }
    ]
},
{
    title:   'HH:MM:SS to seconds (hhMmSsToSeconds)',
    fn:      hhMmSsToSeconds,
    testArr: [
        {
            value: "0:00:00",
            result: 0
        },
        {
            value: "1:00:00",
            result: 3600
        },
        {
            value: "1:01:00",
            result: 3660
        },
        {
            value: "1:01:01",
            result: 3661
        }
    ]
},
{
    title:   'Seconds to HH:MM:SS (secondsToHhMmSs)',
    fn:      secondsToHhMmSs,
    testArr: [
        {
            value: 0,
            result: "0:00:00"
        },
        {
            value: 1,
            result: "0:00:01"
        },
        {
            value: 61,
            result: "0:01:01"
        },
        {
            value: 3661,
            result: "1:01:01"
        }
    ]
}].forEach(e => runTestArray( e.title, e.fn, e.testArr ))
