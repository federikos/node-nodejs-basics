import fs from 'node:fs/promises';
import url from 'node:url';

const create = async () => {
    const path = url.fileURLToPath(new URL('files/fresh.txt', import.meta.url));

    try {
        await fs.stat(path);
    } catch(e) {
        await fs.writeFile(path, 'I am fresh and young');
        return;
    }

    throw new Error('FS operation failed');
};

await create();