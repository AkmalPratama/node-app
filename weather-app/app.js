// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });
//
//961052117635f86f469c0e5d411f51c0

const request = require('request');
const yargs = require('yargs');

// const argv = yargs
//     .options({
//         k: {
//             demand: true,
//             alias: 'key',
//             describe: 'request key API',
//             string: true
//         },
//         lat: {
//             demand: true,
//             alias: 'latitude',
//             string: true
//         },
//         lng: {
//             demand: true,
//             alias: 'longitude',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

request({
    url: 'https://api.darksky.net/forecast/961052117635f86f469c0e5d411f51c0/37.207271,-94.566473',
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather');
    }
});