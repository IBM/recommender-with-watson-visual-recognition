
> Provide an API for handling externalized/translated strings in a way that is compliant with IBM GTV guidelines.

## Usage

```javascript
var strings = require('ibm-strings');
var path = require('path');

// load up the nls folder
var localizedMessages = strings({locales: path.join(__dirname, 'nls')});

// show a simple localized message
console.log(localizedMessages.simpleMessage);
```

The "locales" property should be set to a folder which contains the translated message files.  These files are expected to be named "messages.json" to contain a simple JSON object with one level of key-value pairs.  The key represents the message in code, and the value will be the translated message for that key.  Each translated file is put into separate folders whose name matches the locale code for the translation.  For example, the Finnish translation would be located at: nls/fi/messages.json since "fi" is the locale code for the Finnish language.

ibm-stings also comes with a set of convenience methods to help you maintain a consistent color scheme when displaying errors and such:

```javascript
strings.success('Success:' + localizedMessages.simpleMessage);
strings.info('Info:' + localizedMessages.simpleMessage);
strings.fatal(localizedMessages.simpleMessage);
```

Additionally, localized messages can contain templated sections which can be injected with values at runtime.  For example, this message:

```json
"messageWithTemplate": "Hello, {0}"
```

will display as "Hello, John" when invoked in the following way, using the format() function:

```javascript
console.log(strings.format(localizedMessages.messageWithTemplate, 'John'));
```

The format() function's first argument is the localized message, and all following arguments are the values to be inserted into the message template.  The order of the arguments determines how the values are injected into the message.  For example, this message:

```json
"messageWithReorderedTemplate": "The array index order matters: {1} {2} {0}"
```

will display as "The array index order matters: Index1 Index2 Index0" when invoked in the following manner:

```javascript
console.log(strings.format(localizedMessages.messageWithReorderedTemplate, 'Index0', 'Index1', 'Index2'));
```

where the positional index of the arguments passed into the format() function determines which template sections are replaced with that argument.  This allows for translators to rearrange the template sections as the specific language's rules of grammar dictate.

## Examples

Please see the [example](example) project to see ibm-strings in action.

## License

IBM Proprietary
