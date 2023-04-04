const array = [];
while (true) {
    // увеличение массива на каждой итерации
    array.push(new Array(10000000));

    const memory = process.memoryUsage();
    console.log((memory.heapUsed / 1024 / 1024 / 1024).toFixed(4), 'GB');
}
