import {Card} from '../../../components/Card/index';
import {StyledTvText, TvListWrapper} from './TvList.style';
import {ListContext} from '../../../context';
import {useContext} from "react";

export const TvList = () => {
  const {tvList, baseImgUrl} = useContext(ListContext);
  return (
    <div>
      <StyledTvText>TV SERIES</StyledTvText>
      <TvListWrapper>
        {tvList.map((tv, i) => {
          
          return (
            <Card
              key={i}
              title={tv.name}
              imgSrc={baseImgUrl + tv.poster_path}
              popularity={tv.popularity}
              point={tv.vote_average}
              id = {tv.id}
              trailer = {tv.video}
            />
          );
        })}
        <Card />
      </TvListWrapper>
    </div>
  );
};

// backdrop_path: "/fFT7T9y9NVRdcdVh81roVrJBcDh.jpg"
// first_air_date: "2012-10-10"
// genre_ids: [80, 18, 9648, 10759]
// id: 1412
// name: "Arrow"
// origin_country: ["US"]
// original_language: "en"
// original_name: "Arrow"
// overview: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow."
// popularity: 170.07
// poster_path: "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
// vote_average: 6.5
// vote_count: 4097
