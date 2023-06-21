import { fork } from 'node:child_process';
import url from 'node:url';
import path from 'node:path';

const spawnChildProcess = async (args) => {
    const workerFilePath = url.fileURLToPath(new URL(path.join('files', 'script.js'), import.meta.url));
    fork(workerFilePath, args);
};

spawnChildProcess(['lol', 'kek', 'cheburek']);
