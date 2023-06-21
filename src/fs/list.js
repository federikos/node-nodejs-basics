import fs from 'node:fs/promises';
import url from 'node:url';

const list = async () => {
    const filesPath = url.fileURLToPath(new URL('files', import.meta.url));
    try {
        const files = await fs.readdir(filesPath);
        console.log(files);
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await list();