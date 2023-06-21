const parseArgs = () => {
    const args = process.argv.slice(2);
    const propNames = args.filter((_, i) => i % 2 === 0);
    const propValues = args.filter((_, i) => i % 2 !== 0);
    const resultString = propNames
        .map((propName, i) => `${propName} is ${propValues[i]}`)
        .join(', ');
    console.log(resultString);
};

parseArgs();