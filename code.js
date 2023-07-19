function splitArray(array, n) {
  // Check if the input parameters are valid.
  if (n <= 0) {
    throw new Error("n must be a positive integer");
  }

  // Calculate the size of each chunk.
  const chunkSize = Math.ceil(array.length / n);

  // Create an empty array to store the chunks.
  const splitArrays = [];

  // Iterate over the array and add each chunk to the `splitArrays` array.
  for (let i = 0; i < n; i++) {
    const start = i * chunkSize;
    const end = Math.min(array.length, start + chunkSize);
    splitArrays.push(array.slice(start, end));
  }

  // Return the `splitArrays` array.
  return splitArrays;
}
