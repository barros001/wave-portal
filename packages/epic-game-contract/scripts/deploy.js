const hre = require("hardhat");

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Pinky", "Dexter", "Johnny Bravo"],
    [
      "https://i.imgur.com/ZK9nGeQ.png",
      "https://i.imgur.com/HAetvz1.jpg",
      "https://i.imgur.com/m0tebUo.jpg",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Gizmo", // Boss name
    "https://i.imgur.com/7hbca6B.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
