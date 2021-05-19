const JSSalsa20 = require('js-salsa20')


const key_example = ['1', '2', 'E', '9', '8', '6', 'D', 'E', '3', '41', '4', '1', 'Y', 'H', 'R', 'E', '31', '41', '5', '1', '6', '1', '9', '12', 'asd', '7', '7', 'a', '6','K', 'A', '21']
const key = new Uint8Array(key_example); // 32 bytes key
console.log('key_example: ', key_example)
console.log('key length after Uint8Array: ', key.length)
console.log('key after Uint8Array: ', key)
const nonce = new Uint8Array(8); // 8 bytes nonce
console.log('message before convert to bytes array: ', 'test message')
const message = new Uint8Array(toUTF8Array('test message')); // some data as bytes array
console.log('message: ', message)

// Encrypt //
let encrypt = new JSSalsa20(key, nonce).encrypt(message);
console.log('encrypted result: ', encrypt)