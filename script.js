document.getElementById('chunkButton').addEventListener('click', function() {
  const inputString = document.getElementById('stringInput').value;
  const chunkLength = parseInt(document.getElementById('chunkLengthInput').value, 10);

  // Function to chunk the string
  function chunkString(str, chunkLength) {
    if (!str || chunkLength <= 0) return [];
    const chunks = [];
    for (let i = 0; i < str.length; i += chunkLength) {
      chunks.push(str.slice(i, i + chunkLength));
    }
    return chunks;
  }

  // Generate chunks and append them to the list
  const chunked = chunkString(inputString, chunkLength);
  const resultList = document.getElementById('chunkedResult');

  // Instead of clearing the previous results, append new chunks
  chunked.forEach(chunk => {
    const li = document.createElement('li');
    li.textContent = chunk;
    resultList.appendChild(li);
  });
});
