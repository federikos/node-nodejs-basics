import { promisify } from 'node:util';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const pipe = promisify(pipeline);

const compress = async () => {
    try {
        const inputPath = url.fileURLToPath(new URL(
            path.join('files', 'fileToCompress.txt'), 
            import.meta.url
        ));
        const outputPath = url.fileURLToPath(new URL(
            path.join('files', 'archive.gz'), 
            import.meta.url
        ));
        const gzip = createGzip();
        const source = createReadStream(inputPath);
        const destination = createWriteStream(outputPath);
        await pipe(source, gzip, destination);
    } catch(err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
};

await compress();