import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const transforming = new Transform({
        transform(chunk, _encoding, callback) {
          const chunkStringified = chunk.toString().trim();
          const reversedChunk = chunkStringified.split("").reverse("").join("");
          callback(null, reversedChunk);
        },
      });
    pipeline(process.stdin, transforming, process.stdout, (err) => console.log(err));
};

await transform();