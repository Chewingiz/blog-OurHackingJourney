function loadMarkdownFile(filename) {
  fetch(filename)
    .then(response => response.text())
    .then(markdown => {
      const html = marked.parse(markdown);
      //console.log(html);
      document.getElementById('markdown-output').innerHTML = html;
    })
    .catch(error => console.log(error));
}