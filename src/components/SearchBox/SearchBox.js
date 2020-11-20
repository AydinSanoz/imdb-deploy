import {StyledButton,StyledSearchBox,StyledSearchButton,StyledSearchInput} from './SearchBox.style';

export const SearchBox = ({onChange, onClick, onKeyPress}) => {
    return(
        <StyledSearchBox>
            <StyledSearchInput placeholder = 'Enter a movie...' 
                onChange = {onChange}
                onKeyPress = {onKeyPress}
            />
            <StyledSearchButton onClick = {onClick}> 
                Search 
            </StyledSearchButton>
            
        </StyledSearchBox>
        
    )
}