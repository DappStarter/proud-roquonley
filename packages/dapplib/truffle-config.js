require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strong dash shift pupil hover glimpse furnace general'; 
let testAccounts = [
"0x8af776468b08496e0733f69e890e699492418b5971ed2ac1a86d9e9301ea33d7",
"0xf3b9c9c59c435bd988bc09ffe9131848167f1723acfdaa16ab1c5b2d38fdfa13",
"0xb0952dfa0955c3f1cb0c16678c0fe016bfd2cc32333c07c5135ba2e8cfbece47",
"0x1feddc8058196c611f7458e4a3c8f2a5d9f97372959d57318b1eeff40ecaf0ea",
"0x6d610e25588edd6c2789bd67f00a4a4c08cb91d9f0bd4b5fbe24dee66c721a8e",
"0x6e3c6d81f23a03e60ed0a91d7aa0d1e9d817a80e4dd5d4d35b2317340d25b064",
"0x20da3d728f1298795cf03d3bfd94ffb846e4bfc8dae9decfba6f548517266f25",
"0xffca394676151adeb15cd9b34b4310254bf200cc72b0134303be9e58c1f680c1",
"0x362bac07de50a9cf326bac8f8fe349993817a3faa9af6c6dc1381c9944cdb9f5",
"0xd4c1d68c92ae284924f039c36e3d081f5e0458fc6a93a0284b7eb30ab17f599f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
