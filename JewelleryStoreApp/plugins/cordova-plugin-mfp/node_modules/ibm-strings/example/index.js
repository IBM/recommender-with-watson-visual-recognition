'use strict';

var strings = require('ibm-strings');
var path = require('path');

// load up the nls folder
var localizedMessages = strings({locales: path.join(__dirname, 'nls')});

// show a simple localized message
console.log(localizedMessages.simpleMessage);

// show the convenience methods for color themes
strings.success('Success:' + localizedMessages.simpleMessage);
strings.info('Info:' + localizedMessages.simpleMessage);
strings.fatal(localizedMessages.simpleMessage);

// show a message that uses a template
console.log(strings.format(localizedMessages.messageWithTemplate, 'John'));

// show that the order matters when formatting a message
console.log(strings.format(localizedMessages.messageWithReorderedTemplate, 'Index0', 'Index1', 'Index2'));

// put out an empty line to make the screenshot look better ;)
console.log('');
