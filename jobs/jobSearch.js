const categories = Array.from(jCategory);
const searchBar = document.getElementById("search_bar");

searchBar.addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => 
        item.title.toLowerCase().includes(searchData)
    );
    displayItems(filterData);
});


const displayItems = (items) => {
    const jobsContainer = document.querySelector(".jobs_container");

    jobsContainer.innerHTML = '';

    items.forEach((item) => {
        const {index, image, title, rate, availability} = item;
        const jList = document.createElement('div');
        jList.className = 'jlist';
        jList.innerHTML = `
                <img src="${image}" alt="${title}" />
                <h3>${title}</h3>
                <p>${rate}</p>
                <p id='key'>${availability}</p>
        `;

        jobsContainer.appendChild(jList);

        jList.addEventListener('click', () => {
            window.location.href = `job_details.html?id=${index}`;
        });
    });
};

displayItems(categories);