import fs from 'node:fs/promises';
import url from 'node:url';
import path from 'node:path';

const rename = async () => {
    const oldfilePath = url.fileURLToPath(new URL(
        path.join('files', 'wrongFilename.txt'), 
        import.meta.url
    ));
    const newFilePath = url.fileURLToPath(new URL(
        path.join('files', 'properFilename.md'), 
        import.meta.url
    ));

    try {
        await fs.rename(oldfilePath, newFilePath);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await rename();