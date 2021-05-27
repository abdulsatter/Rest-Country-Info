fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => countryInfo(data))

function countryInfo(countries) {
    const maindiv = document.getElementById('main-div');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        // console.log(country.name)
        const subDiv = document.createElement('div');
        // subDiv.innerText = country.name;
        subDiv.className = 'sub-div';

        const information = `
                <h1>${country.name}</h1>
                <h3>${country.capital}</h3>
                <button onclick = "infoData('${country.name}')" class='btn'>Details</button>
            `
        // console.log(information)
        subDiv.innerHTML = information;
        maindiv.appendChild(subDiv);

    }

}
const infoData = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderData(data[0]))
}
const renderData = country =>{
    const details = document.getElementById('details');
    details.innerHTML = `
        <h1>${country.name}</h1>
        <h3>${country.capital}</h3>
        <p>Population :${country.population}</p>
        <img src= ${country.flag}>
        <p>Area : ${country.area}</P>
        <p>Timezones :${country.timezones}</P>
        

    `
}

