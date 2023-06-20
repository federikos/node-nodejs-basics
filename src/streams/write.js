import url from 'node:url';
import path from 'node:path';
import { createWriteStream } from 'node:fs';

const write = async () => {
    const filePath = url.fileURLToPath(new URL(
        path.join('files', 'fileToWrite.txt'), 
        import.meta.url
    ));
    const writableStream = createWriteStream(filePath);
    process.stdin.pipe(writableStream);
};

await write();