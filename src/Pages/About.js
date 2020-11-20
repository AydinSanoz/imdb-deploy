import { VideoList } from './Sections';
import {
  StyledLogoWrapper,
  StyledSectionContainer,
  StyledSectionWrapper,
  StyledMainContainer
} from './Styles';


export const About = () => {
  return (
    <StyledMainContainer>
      <StyledLogoWrapper class="title">
        <h2>Welcome.</h2> <br/> <hr/>
        <h3>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </StyledLogoWrapper>

      <StyledSectionContainer>
        <StyledSectionWrapper>
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsa
            omnis saepe repellat nisi impedit optio vitae, consectetur accusamus
            dolore laboriosam dolor unde quidem praesentium explicabo
            accusantium aliquid veritatis rem ducimus inventore quibusdam at,
            beatae quam ad? Voluptatem deserunt id expedita illo odit neque
            pariatur dicta magnam asperiores voluptatum dolore quae molestiae
            magni repellendus ab saepe molestias animi iure hic temporibus,
            error, dolor exercitationem. Nam accusantium sunt officiis incidunt
            fugit odio sapiente saepe delectus a impedit esse sit cumque fugiat
            accusamus, vero molestias earum cum illo aliquam harum voluptate
            nisi quidem porro! Quam rem id itaque sequi autem praesentium omnis.
          </p>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsa
            omnis saepe repellat nisi impedit optio vitae, consectetur accusamus
            dolore laboriosam dolor unde quidem praesentium explicabo
            accusantium aliquid veritatis rem ducimus inventore quibusdam at,
            beatae quam ad? Voluptatem deserunt id expedita illo odit neque
            pariatur dicta magnam asperiores voluptatum dolore quae molestiae
            magni repellendus ab saepe molestias animi iure hic temporibus,
            error, dolor exercitationem. Nam accusantium sunt officiis incidunt
            fugit odio sapiente saepe delectus a impedit esse sit cumque fugiat
            accusamus, vero molestias earum cum illo aliquam harum voluptate
            nisi quidem porro! Quam rem id itaque sequi autem praesentium omnis.
          </p>
        </StyledSectionWrapper>
        
      </StyledSectionContainer>
    </StyledMainContainer>
  );
};
