fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "388e93e5aamsh84ccc67f9a372abp160e33jsn1fb03c8610c9",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response => {
	return response.json()
})
.then(res => {
	const content = res.data
    console.log(content)
    content.forEach (
        track => {
            const card = document.createElement('div')
            const col = document.querySelector('.row')
            card.classList.add('card')
            card.classList.add('m-3')
            card.style.width = '12rem'
            card.innerHTML = `<img class="card-img-top" src="${track.album.cover}" alt="Card image cap"><div class="card-body"><p class="card-text"><b>${track.title}</b></p><div>${track.artist.name}</div></div>`
            col.appendChild(card)
        }
    )
})
.catch(err => {
	console.error(err);
});


