export const candyMachineAddress = "0x7265cc487ab85a449ec493e02ecfd0ad27fecc4483bf0d62277b4b4b4e262d6d";
export const collectionName = "Aptos Deers"; // Case sensitive!
export const collectionCoverUrl = "https://i.hizliresim.com/g2fyzyc.png";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
