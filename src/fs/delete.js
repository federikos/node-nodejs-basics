import fs from 'node:fs/promises';
import url from 'node:url';
import path from 'node:path';

const remove = async () => {
    const fileToRemovePath = url.fileURLToPath(new URL(
        path.join('files', 'fileToRemove.txt'), 
        import.meta.url
    ));
    try {
        await fs.rm(fileToRemovePath)
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await remove();