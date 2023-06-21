import path from 'node:path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import url from 'node:url';
import fs from 'node:fs/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const random = Math.random();

let unknownObject;

const pathToA = url.fileURLToPath(new URL(
    path.join('files', 'a.json'), 
    import.meta.url
));

const pathToB = url.fileURLToPath(new URL(
    path.join('files', 'b.json'), 
    import.meta.url
));

if (random > 0.5) {
    unknownObject = JSON.parse(await fs.readFile(pathToA));
} else {
    unknownObject = JSON.parse(await fs.readFile(pathToB));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

