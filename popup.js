document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copyButton').addEventListener('click', function() {
      chrome.tabs.query({}, function(tabs) {
        let urls = tabs.map(tab => tab.url);
        let urlsText = urls.join("\n");
        console.log("URLs capturadas:", urlsText);
        navigator.clipboard.writeText(urlsText).then(function() {
          console.log("URLs copiadas para o clipboard:", urlsText);
        }).catch(function(err) {
          console.error("Erro ao copiar as URLs para o clipboard:", err);
        });
      });
    });
  });
  