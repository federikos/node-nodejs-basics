import fs from 'node:fs/promises';
import url from 'node:url';
import path from 'node:path';

const read = async () => {
    const filePath = url.fileURLToPath(new URL(
        path.join('files', 'fileToRead.txt'), 
        import.meta.url
    ));
    try {
        const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
        console.log(fileContent);
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await read();