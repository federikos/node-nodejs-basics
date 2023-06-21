
import url from 'node:url';
import path from 'node:path';
import crypto from 'node:crypto';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
    const filePath = url.fileURLToPath(new URL(
        path.join('files', 'fileToCalculateHashFor.txt'), 
        import.meta.url
    ));
    const hash = crypto.createHash('sha256');

    const input = createReadStream(filePath);
    input.on('readable', () => {
        const data = input.read();
        if (data) {
            hash.update(data);
        } else {
            console.log(hash.digest('hex'));
        }
    })

};

await calculateHash();