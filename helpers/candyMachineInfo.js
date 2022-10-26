export const candyMachineAddress = "0xaa318e1f812a60b9b894d56fd2e940359838f022b17498301f05a9d9d5172c14";
export const collectionName = "AptosDeers"; // Case sensitive!
export const collectionCoverUrl = "https://i.hizliresim.com/g2fyzyc.png";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

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
