document.addEventListener('DOMContentLoaded', () => {
    // Selecionar os elementos HTML
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-button');
    const citySelect = document.getElementById('cidade');
    const neighborhoodSelect = document.getElementById('bairro');
    const starsInput = document.getElementById('estrelas');
    const resultsContainer = document.querySelector('.resultados');

    // Dados fictícios de serviços (seriam normalmente puxados de uma API ou banco de dados)
    const services = [
        {
            name: "Miguel Santos",
            profession: "Carpinteiro",
            city: "bh",
            neighborhood: "centro",
            stars: 5,
            image: "img/carpinteiro.png"
        },
        {
            name: "Matue",
            profession: "Cantor",
            city: "bh",
            neighborhood: "savassi",
            stars: 4,
            image: "img/carpinteiro.png"
        },
        {
            name: "Alex",
            profession: "Eletricista",
            city: "bh",
            neighborhood: "funcionarios",
            stars: 5,
            image: "img/carpinteiro.png"
        },
        {
            name: "Mychael",
            profession: "Mecânico",
            city: "bh",
            neighborhood: "pampulha",
            stars: 3,
            image: "img/carpinteiro.png"
        },
        {
            name: "Bruno",
            profession: "Encanador",
            city: "bh",
            neighborhood: "lourdes",
            stars: 5,
            image: "img/carpinteiro.png"
        },
        {
            name: "Davi",
            profession: "Carpinteiro",
            city: "bh",
            neighborhood: "centro",
            stars: 5,
            image: "img/carpinteiro.png"
        },
        {
            name: "Lucas",
            profession: "Marceneiro",
            city: "bh",
            neighborhood: "belvedere",
            stars: 4,
            image: "img/carpinteiro.png"
        },
        {
            name: "Caio",
            profession: "Funilaria e Pintura Automotiva",
            city: "bh",
            neighborhood: "centro",
            stars: 5,
            image: "img/carpinteiro.png"
        }
    ];

    // Função para filtrar e exibir os resultados
    function filterServices() {
        // Pegar os valores dos filtros
        const searchTerm = searchInput.value.toLowerCase();
        const city = citySelect.value;
        const neighborhood = neighborhoodSelect.value;
        const stars = parseInt(starsInput.value);

        // Filtrar os serviços com base nos filtros e no termo de pesquisa
        const filteredServices = services.filter(service => {
            // Verificar se o nome ou profissão contém o termo de pesquisa (caso o termo seja vazio, a pesquisa não aplica)
            const matchesSearchTerm = service.name.toLowerCase().includes(searchTerm) || service.profession.toLowerCase().includes(searchTerm);

            // Verificar se a cidade e o bairro coincidem com os filtros ou se o valor do filtro é 'all'
            const matchesCity = city === "all" || service.city === city;
            const matchesNeighborhood = neighborhood === "all" || service.neighborhood === neighborhood;

            // Verificar se a quantidade de estrelas é maior ou igual ao valor selecionado
            const matchesStars = service.stars >= stars;

            return matchesSearchTerm && matchesCity && matchesNeighborhood && matchesStars;
        });

        // Limpar os resultados antigos
        resultsContainer.innerHTML = '';

        // Se não houver serviços filtrados, mostrar uma mensagem
        if (filteredServices.length === 0) {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = "Nenhum serviço encontrado para os critérios selecionados.";
            resultsContainer.appendChild(noResultsMessage);
            return;
        }

        // Exibir os serviços filtrados
        filteredServices.forEach(service => {
            const card = document.createElement('div');
            card.classList.add('card');

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = service.image;
            img.alt = service.name;
            imageContainer.appendChild(img);

            const title = document.createElement('h3');
            title.textContent = service.name;

            const description = document.createElement('p');
            description.textContent = `${service.city}, MG\n${service.profession}`;

            const stars = document.createElement('div');
            stars.classList.add('stars');
            stars.textContent = '★★★★★'.slice(0, service.stars);

            card.appendChild(imageContainer);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(stars);

            resultsContainer.appendChild(card);
        });
    }

    // Função que é acionada ao pressionar o botão de pesquisa
    searchButton.addEventListener('click', filterServices);

    // Função que é acionada ao mudar os filtros
    citySelect.addEventListener('change', filterServices);
    neighborhoodSelect.addEventListener('change', filterServices);
    starsInput.addEventListener('input', filterServices);

    // Inicializar os resultados ao carregar a página
    filterServices();
});
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }
  function redirecionar(link) {
    window.location.href = link;
  }

