import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailPage() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);

      setMovie(response.data);
    }

    fetchData();
  }, [movieId])

  return (
    <>
      {movie?
        <section>
          <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="img" className="modal__poster-img" />
        </section>
        :null}
    </>
  )
}

export default DetailPage;