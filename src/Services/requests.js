import ApiKey from '../Services/apikey'
const requests = {

	'trending': `https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`,
	'ratedMovies': `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`,
	'ratedTvShows': `https://api.themoviedb.org/3/tv/top_rated?api_key=${ApiKey}&language=en-US&page=1`,
	
}

export default requests;