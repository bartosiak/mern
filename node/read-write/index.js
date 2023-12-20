const saveData = require("./saveDataModule");

const jsonFilePath = "./data/users.json";
const folderName = "users-info";
const overwriteExisting = true;

saveData(jsonFilePath, folderName, overwriteExisting);
