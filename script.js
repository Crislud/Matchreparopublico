document.addEventListener("DOMContentLoaded", function() {
    // Obtém o input de pesquisa e o botão de pesquisa
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-button');
    const serviceOptions = document.querySelectorAll('.service');

    // Função que filtra os serviços com base na pesquisa
    function filterServices(query) {
        serviceOptions.forEach(service => {
            const serviceName = service.querySelector('p').textContent.toLowerCase(); // Obtém o nome do serviço
            if (serviceName.includes(query.toLowerCase())) {
                service.style.display = 'block'; // Mostra o serviço
            } else {
                service.style.display = 'none'; // Oculta o serviço
            }
        });
    }

    // Event listener para o botão de pesquisa
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim(); // Pega o valor da pesquisa
        filterServices(query); // Filtra os serviços
    });

    // Event listener para pressionar Enter na pesquisa
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim(); // Pega o valor da pesquisa
            filterServices(query); // Filtra os serviços
        }
    });
});
HEAD
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }

