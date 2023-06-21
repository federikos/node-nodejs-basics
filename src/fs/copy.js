import fs from 'node:fs/promises';
import url from 'node:url';
import path from 'node:path';

const copy = async () => {
    const filesPath = url.fileURLToPath(new URL('files', import.meta.url));
    const filesCopyPath = url.fileURLToPath(new URL('files_copy', import.meta.url));
    try {
        await fs.mkdir(filesCopyPath);
        const files = await fs.readdir(filesPath);
        const copiedFilesPromises = files.map(async (file) => await fs.copyFile(
            path.resolve(filesPath, file), 
            path.resolve(filesCopyPath, file)
        ));
        await Promise.all(copiedFilesPromises);
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await copy();
