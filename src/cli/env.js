const parseEnv = () => {
   const resultString = Object.keys(process.env)
    .filter((nextKey) => nextKey.startsWith('RSS_'))
    .map((nextKey) => `${nextKey}=${process.env[nextKey]}`)
    .join('; ')

  console.log(resultString);
};

parseEnv();