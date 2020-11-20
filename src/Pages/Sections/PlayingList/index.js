import {Card} from '../../../components/Card/index';
import {StyledPlayingListText, StyledPlayingListWrapper} from './PlayingList.style';
import {ListContext} from '../../../context';
import {useContext} from "react";

export const PlayingList = () => {

  const {nowPlayingList, baseImgUrl} = useContext(ListContext);
  
  return (
    <div>
      <StyledPlayingListText>NOW PLAYING</StyledPlayingListText>
      <StyledPlayingListWrapper>
        {nowPlayingList?.map((video, i) => (
          <Card
            key={i}
            title={video.title}
            imgSrc={baseImgUrl + video.poster_path}
            popularity = {video.popularity}
            point = {video.vote_average}
            id = {video.id}
            trailer = {video.video}
          />
        ))}
      </StyledPlayingListWrapper>
    </div>
  );
};

/*
adult: false
backdrop_path: null
genre_ids: (3) [16, 35, 878]
id: 42979
original_language: "en"
original_title: "Robot Chicken: Star Wars"
overview: "Fans of Adult Swim's "Robot Chicken" and the Star Wars movie franchise won't want to miss this collection of 30 sketches. This hilarious compilation features an array of skits -- such as "Darth Vader's Collect Call" and "Inside the AT-AT" -- as well as the incredible voice talents of Hulk Hogan, Malcolm McDowell, Conan O'Brien and even the original Luke Skywalker himself, Mark Hamill."
popularity: 11.822
poster_path: "/h44WN4mVJ6wEpJgLaaNoFjv0NAo.jpg"
release_date: "2007-07-17"
title: "Robot Chicken: Star Wars"
video: false
vote_average: 7.3
vote_count: 159
*/
