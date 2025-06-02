function loadFooter() { 
  fetch('../../../layout/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    })
    .catch(err => {
      console.error("Error while load footer:", err);
    });
}

function loadMenu() { 
  fetch('../../../layout/menu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('menu').innerHTML = html;
    })
    .catch(err => {
      console.error("Error while load menu:", err);
    });
}