import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Switch from './components/Switch';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [search, SetSearch] = useState("");

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);
			const resData= await temp.json();
			SetAnimeList(resData.data)
	}

	
	return (
		<div className="App">
			<div className="content-wrap">
			<Switch label = "c" />
				<SearchBar
					HandleSearch={HandleSearch}
					search={search}
					SetSearch = {SetSearch}
					animeList={animeList} />
			</div>
		</div>
	);
}

export default App;