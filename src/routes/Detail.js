import { useParams } from "react-router-dom";
import { useEffect } from "react";
function Detail() {
  // App.js 에서 넘어간 parameter 받아오기
  // App.js의 Router에 사용한 동일한 변수 이름 써야함!!
  const { params } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params}`)
    ).json();
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
