const fs = require("fs");
const path = require("path");

function saveData(jsonFilePath, folderName, overwriteExisting) {
    const jsonData = require(jsonFilePath);
    const folderPath = path.join(__dirname, folderName);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    jsonData.forEach((user) => {
        const nameParts = user.name.split(" ");

        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(" ");

        const fileName = `${user.id}-${firstName}-${lastName}.txt`;
        const filePath = path.join(folderPath, fileName);

        const dataToWrite = `Name: ${firstName}\nSurname: ${lastName}\nStreet: ${user.address.street}\nZip Code: ${user.address.zipCode}\nCity: ${user.address.city}\nPhone: ${user.phone}\n`;

        if (overwriteExisting || !fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, dataToWrite);
            console.log(
                `Data for ${firstName} ${lastName} saved successfully.`
            );
        } else {
            console.log(`File for ${firstName} ${lastName} already exists.`);
        }
    });

    console.log(`Data saved to ${folderPath}.`);
}

module.exports = saveData;
