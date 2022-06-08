/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const charactersAddress = "0x075854b315f2cd7ec490853bc5589b09e546449f";
const charactersAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "CC", "outputs": [ { "internalType": "contract iCC", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CS", "outputs": [ { "internalType": "contract iCS", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "Metadata", "outputs": [ { "internalType": "contract iMetadata", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SCAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TPAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI_EXT", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "beamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "transponderIds_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "spaceCapsuleIds_", "type": "uint256[]" }, { "internalType": "uint8[]", "name": "renderTypes_", "type": "uint8[]" } ], "name": "multiBeamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "bytes_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "metadata_", "type": "address" }, { "internalType": "address", "name": "cc_", "type": "address" }, { "internalType": "address", "name": "cs_", "type": "address" }, { "internalType": "address", "name": "mes_", "type": "address" }, { "internalType": "address", "name": "tp_", "type": "address" }, { "internalType": "address", "name": "sc_", "type": "address" } ], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint256", "name": "uploadId_", "type": "uint256" } ], "name": "uploadCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" } ]';
};

const characterStorageAddress = "0xC7C40032E952F52F1ce7472913CDd8EeC89521c4";
const characterStorageAbi = () => {
return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "characterMain", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "characters", "outputs": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "contractToRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "controllers", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "Character_", "type": "tuple" } ], "name": "createCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "equipments", "outputs": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getCharacter", "outputs": [ { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getEquipment", "outputs": [ { "components": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Equipment", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" } ], "name": "getRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getStats", "outputs": [ { "components": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Stats", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "names", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" } ], "name": "setAgility", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArmsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArtifactUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" } ], "name": "setAugments", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" } ], "name": "setBasePoints", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setCharacterMain", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setChestUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" } ], "name": "setConstitution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setContractToRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setHeadUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" } ], "name": "setIntelligence", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setLegsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" } ], "name": "setName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "setRenderType", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setRingUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" } ], "name": "setSpaceCapsuleId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "name": "setSpirit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "strength_", "type": "uint8" } ], "name": "setStrength", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "name": "setTotalEquipmentBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" } ], "name": "setTransponderId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setVehicleUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setWeaponUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "stats", "outputs": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "stateMutability": "view", "type": "function" } ]`;
};

const raffleAddress = "0x3DC6a9DFD765889406A16b33D14579C5dbfCe9Dd";
// const raffleAbi = () => {
//     return ``;
// };

const mesAddress = "0x3c2eb40d25a4b2b5a068a959a40d57d63dc98b95";
const mesAbi = () => {
    return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "to_", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "addCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateAdd_", "type": "uint256" } ], "name": "addYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToYield", "outputs": [ { "internalType": "uint40", "name": "yieldRate_", "type": "uint40" }, { "internalType": "uint40", "name": "lastUpdatedTime_", "type": "uint40" }, { "internalType": "uint176", "name": "pendingRewards_", "type": "uint176" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "airdropMigration", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "deductCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getYieldRateOfAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "globalModulus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "halvingRate", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "mesControllers", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "migrateRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" }, { "internalType": "uint40[]", "name": "lastUpdatedTimes_", "type": "uint40[]" }, { "internalType": "uint40[]", "name": "yieldRates_", "type": "uint40[]" }, { "internalType": "uint176[]", "name": "pendingRewards_", "type": "uint176[]" } ], "name": "migrateSetNewYieldInfos", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "migrationEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "from_", "type": "address[]" }, { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiUpdateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "oMES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "raw_getPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "raw_getStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "raw_getTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint40", "name": "rate_", "type": "uint40" } ], "name": "setHalvingRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setMigrationEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint40", "name": "yieldEndTime_", "type": "uint40" } ], "name": "setYieldEndTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRate_", "type": "uint256" } ], "name": "setYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setoMEs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateSub_", "type": "uint256" } ], "name": "subYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "updateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "yieldEndTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldStartTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" } ]`;
};

const etherscanBase = `https://etherscan.io/tx/`;
const correctChain = 1;
const priceWei = "5000000000000000000";
const priceEth = 5;
const openseaLink = "#";
const looksrareLink = "#";

/*********************************************************************************/
/***********************************END CONFIG************************************/
/*********************************************************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to purchase entries!');
}

// Initiate Provider 
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

// General Functions
const connect = async() => { await provider.send("eth_requestAccounts", []) };
const getAddress = async() => { try { return await signer.getAddress(); } catch { return false; }}; 
const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus
const getChainId = async() => { return await signer.getChainId() };

// const raffle = new ethers.Contract(raffleAddress, raffleAbi(), signer);
const characters = new ethers.Contract(charactersAddress, charactersAbi(), signer);
const characterStorage = new ethers.Contract(characterStorageAddress, characterStorageAbi(), signer);
const mes = new ethers.Contract(mesAddress, mesAbi(), signer);

const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639934";
let multiplier = 1;
let ownedTokenID = 0;

function decrementClaim() {
    let currentClaim = Number($("#number-to-mint").val());
    if (currentClaim > 1) {
        let newClaim = currentClaim - 1;
        $("#number-to-mint").val(newClaim);
        updatePrice();
    }
}

function updatePrice() {
    let currentClaim = Number($("#number-to-mint").val());
    $("#current-cost").text(priceEth * currentClaim);
    $("#current-total").text(currentClaim * multiplier);
}

const incrementClaim = async() => {
    let currentClaim = Number($("#number-to-mint").val());
    let newClaim = currentClaim + 1;
    let mesBalance = await getMesBalance();
    if (newClaim * priceEth > mesBalance) {
        await displayErrorMessage("Not enough $MES for this amount!");
    }
    else {
        $("#number-to-mint").val(newClaim);
        updatePrice();
    }
}

const setMaxMint = async() => {
    let mesBalance = await getMesBalance();
    let max = Math.floor(mesBalance / priceEth);
    $("#number-to-mint").val(max);
    updatePrice();        
}

const approveMesToRaffle = async() => {
    await mes.approve(raffleAddress, maxInt).then(async(tx_) => {
        await waitForTransaction(tx_);
        await checkMesApproved();
    });
}

const getMesBalance = async()=>{
    const userAddress = await getAddress();
    let mesBalance = Number(formatEther(await mes.balanceOf(userAddress))).toFixed(2);
    $("#mes-balance").html(mesBalance);
    return mesBalance;
};

const getMultipliers = async() => {
    const userAddress = await getAddress();
    const ownedCharacters = await characters.walletOfOwner(userAddress);
    if (ownedCharacters.length > 0) {
        $("#multiplier-description").text("Martian Holder Bonus");
        $("#multiplier").text("2");
        multiplier = 2;
        for (character of ownedCharacters) {
            const stats = await characterStorage.characters(character);
            if (stats.augments_  == 10) {
                $("#multiplier-description").text("Lvl 10 Augment Bonus");
                $("#multiplier").text("3");
                multiplier = 3;
                ownedTokenID = Number(character);
                console.log(ownedTokenID)
                break;
            }
        }
        updatePrice();
        $("#multiplier-section").removeClass("hidden");
    }
}

const checkMesApproved = async() => {
    const userAddress = await getAddress();
    const mesApproved = (Number(await mes.allowance(userAddress, raffleAddress)) >= maxInt);
    if (mesApproved) {
        $("#approve-mes-button").addClass("hidden");
        $("#purchase-button").removeClass("disabled");
        $("#purchase-button").attr("onclick", "purchaseRaffle()");
        return true;
    }
    else {
        $("#approve-mes-button").removeClass("hidden");
        $("#purchase-button").addClass("disabled");
        $("#purchase-button").attr("onclick", "");
        return false;
    }
}

const purchaseRaffle = async() => {
    return;
}


const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        $("#refresh-notification").remove();
        await updateCurrentChain();
    }
});

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("MartianRafflePendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("MartianRafflePendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("MartianRafflePendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        // await updateMintInfo();
    }
}

setInterval(async()=>{
    await updateInfo();
    await checkMesApproved();
    await getMesBalance();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#account").addClass("connected");
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    await checkMesApproved();
    await getMesBalance();
    await getMultipliers();
    await updatePrice()
};

window.onunload = async()=>{
    cachePendingTransactions();
}