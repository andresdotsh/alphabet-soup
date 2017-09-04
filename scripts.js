(function (doc) {
  const soup = doc.getElementById('my-table');
  const wordInput = doc.getElementById('in-word');
  const wordsArr = [];
  const num = 20;

  function generateLetter() {
    return String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65);
  }

  function drawTable(table, size) {
    for (let x = 0; x < size; x += 1) {
      const row = table.insertRow(x);
      for (let y = 0; y < size; y += 1) {
        const cell = row.insertCell(y);
        cell.innerHTML = generateLetter();
      }
    }
  }

  function addWord(list, word) {
    const li = doc.createElement('li');
    const text = doc.createTextNode(word);
    li.appendChild(text);
    list.appendChild(li);
  }

  wordInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      const word = wordInput.value.toUpperCase();
      wordsArr.push(word);
      addWord(doc.getElementById('my-list'), word);
      wordInput.value = '';
      wordInput.focus();
    }
  });

  drawTable(soup, num);
  wordInput.focus();
})(document);
