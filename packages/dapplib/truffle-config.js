require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant install person blue syrup'; 
let testAccounts = [
"0x6b929714f7ac7c4f13169b3f8d08ac5000f4e30afc7b8d360e342293a0013919",
"0x9f49150200272ec01054c6b1e43f4a1534a2f083cb0bf38379289bab2334acd3",
"0xe5c3e03de1c6b6bdcfa2ab638dfc2e2ddebdb93a322413cd24fd155bd93f0121",
"0x46864e24f73ea9d87abb9859436647cf46a79f4dbab3dc5ab39a2c5e090136b4",
"0xaef2a442cfd9f25bc5545b1fd57a1042c9e942cf98690513690e0dfa0c39a445",
"0x63f97523a3b3f88c35de05ec1ddfaecfbd2928c02164d9e59e0d68388f6ea494",
"0xd15c37d9de75caccfb68c6707344316f2cc3d6744ecbd131957f4c8ad0fbb0d5",
"0x9e5bed6640a79bff0d5bd3c5b6b096fd19d28cbe615208316e161f60652c9505",
"0xf55de2b1f4ed553152bf2ebce5085dbaadb90033cee2b308bad973fed5d05e72",
"0x6de4e666f398d3ed5351c1f24659cc122e669e02431eb3f65644b4722b16182d"
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
            version: '^0.8.0'
        }
    }
};

