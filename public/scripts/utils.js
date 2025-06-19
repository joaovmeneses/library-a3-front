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


function loadMenu(page) {
  fetch('../../../layout/menu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('menu').innerHTML = html;
      switch (page) {
        case 'books':
          document.getElementById('menuBookBtn').classList.add('active');
          break;
        case 'employees':
          document.getElementById('menuEmployeeBtn').classList.add('active');
          break;
        case 'students':
          document.getElementById('menuStudentBtn').classList.add('active');
          break;
        case 'borrows':
          document.getElementById('menuHomeBtn').classList.add('active');
          break;
        case 'student-home':
          document.getElementById('nav-menu').setAttribute('hidden', true)
        default:
          console.warn("Unknown page:", page);
      }

    })
    .catch(err => {
      console.error("Error while load menu:", err);
    });
}

function logout() {
  localStorage.clear();
  window.location.href = "/pages";
}

function verificarAutenticacao() {
  const token = localStorage.getItem('token');
  if (!token) {
    alert("Você não está autenticado!");
    window.location.href = "/pages";
  }
}

const baseUrl = "https://library-a3-production.up.railway.app";