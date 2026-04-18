//Puxando HEADER
fetch('includes/header.html')
    .then(Response => Response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

//Puxando Main
fetch('includes/main.html')
    .then(Response => Response.text())
    .then(data => {
        document.getElementById('main-placeholder').innerHTML = data;
    });

//Puxando FOOTER
fetch('includes/footer.html')
    .then(Response => Response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });