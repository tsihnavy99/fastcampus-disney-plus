import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css'
import { useDebounce } from '../../hooks/useDebounce';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm])

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const url = `/search/multi?include_adult=false&query=${searchTerm}`;
      const response = await axios.get(url);
      setSearchResults(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <>
      {searchResults.length>0?
        <section className="search-container">
          {searchResults.map((movie) => {
            if(movie.backdrop_path!==null && movie.media_type!=="person") {
              const movieImgUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className="movie" key={movie.id}>
                  <div className="movie__column-poster"
                        onClick={() => navigate(`/${movie.id}`)}>
                    <img src={movieImgUrl} alt="movie" className="movie__poster" />
                  </div>
                </div>
              )
            }
            return null;
          })}
        </section>
        :<section className="no-results">
          <div className="no-results__text">
            <p>
              찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>

      }
    </>
  )
}

export default SearchPage;