const Migrations = artifacts.require("Migrations");
const BACFarmerv7 = artifacts.require("BACFarmerv7");
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(BACFarmerv7);
};
