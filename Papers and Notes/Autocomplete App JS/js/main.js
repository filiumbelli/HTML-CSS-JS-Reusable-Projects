const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//filter and return list
const searchState = async searchValue => {
    const response = await fetch('../data/states.json');
    const states = await response.json();
    let matches = states.filter((state) => {
        //get the first letter of the searchValue and match it with global and case 'i'nsensitive value
        const regex = new RegExp(`^${searchValue}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    })

    if (searchValue.length === 0) {
        matches = [];
        matchList.innerHTML = ''

    }

    outputHtml(matches);

};


//render output on html

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-4">
            <h4>${match.name}(${match.abbr})
                <span class="text-info">${match.capital}</span>
            </h4>
            <small>lat: ${match.lat}, long: ${match.long}</small>
        </div> `).join('')
        matchList.innerHTML = html;
    }

};

search.addEventListener('input', () => searchState(search.value));
