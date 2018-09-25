const file = require("./fileData");
const text = require("./textMetrics");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));// promisify 


async function main(filePath) {
  try {
    const fileName = filePath.split('.')[0];
    const resultFileName = `${fileName}.result.json`
    const stringPath = `${fileName}.result.txt`
    if (fs.existsSync(resultFileName)) {
      console.log(await file.getFileAsJSON(resultFileName));
    }
    else {
      let file_data = await file.getFileAsString(filePath);
      let text_metrics = text.createMetrics(file_data);
      if (await file.saveStringToFile(stringPath, file_data)) {
        await file.saveJSONToFile(resultFileName, text_metrics);
      }
    }
    //console.log("Done");
  } catch (error) {
    console.log(error)
  }
}
main('chapter1.txt');
//main('chapter2.txt');
//main('chapter3.txt');

//main('hello.txt');
//console.log(text.createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"));//14  10








