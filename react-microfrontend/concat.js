const fs = require('fs-extra');
const concat = require('concat');

async function concatBuild() {
    try {
        // Concatenate JavaScript files
        const jsFiles = await fs.readdir('./build/static/js');
        const jsConcatFiles = jsFiles.filter(file => file.endsWith('.js')).map(file => `./build/static/js/${file}`);
        await concat(jsConcatFiles, './build/main.js');
        console.log(`Concatenated JS files into ./build/main.js`);

        // Concatenate CSS files
        const cssFiles = await fs.readdir('./build/static/css');
        const cssConcatFiles = cssFiles.filter(file => file.endsWith('.css')).map(file => `./build/static/css/${file}`);
        await concat(cssConcatFiles, './build/styles.css');
        console.log(`Concatenated CSS files into ./build/styles.css`);

        console.log('Concatenation complete.');
    } catch (error) {
        console.error('Error concatenating files:', error);
    }
}

concatBuild();
