const { DateTime } = require('luxon')

const build = require('../src/data/build')

let defaultZone = 'local';
if (Object.prototype.hasOwnProperty.call(build, 'timezone')) {
  const testDate = DateTime.local().setZone(build.timezone);
  if (testDate.isValid) {
    defaultZone = build.timezone;
  } else {
    console.warn(testDate.invalidExplanation);
  }
}

module.exports = {
  dateToFormat: function (date, format, zone = defaultZone) {
    return DateTime.fromJSDate(date, { zone }).toFormat(String(format))
  },

  dateToISO: function (date, zone = defaultZone) {
    return DateTime.fromJSDate(date, { zone }).toISO({
      includeOffset: false,
      suppressMilliseconds: true,
    })
  },

  obfuscate: function (str) {
    const chars = []
    for (var i = str.length - 1; i >= 0; i--) {
      chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
    }
    return chars.join('')
  },
}
