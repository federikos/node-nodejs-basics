import url from 'node:url';
import path from 'node:path';
import { createReadStream } from 'node:fs';

const read = async () => {
    const filePath = url.fileURLToPath(new URL(
        path.join('files', 'fileToRead.txt'), 
        import.meta.url
    ));
    const readableStream = createReadStream(filePath);
    readableStream.pipe(process.stdout);
};

await read();