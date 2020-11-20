import {StyledLogoWrapper} from "./Video.style"
export const VideoCard = ({video}) => {
  return (
    <StyledLogoWrapper>
    <iframe
        src="https://www.youtube.com/embed/yvGE7Cz9VDA"
        width="320"
        height="215"
        margin="20px"
        frameborder="0"
        allowfullscreen
      ></iframe>
    
    <iframe
        src="https://www.youtube.com/embed/EBSjabRNztY"
        width="320"
        height="215"
        margin="20px"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/H-0RHqDWcJE"
        width="320"
        height="215"
        margin="20px"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </StyledLogoWrapper>
  );
};
