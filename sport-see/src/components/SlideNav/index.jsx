import styled from 'styled-components'
import colors from '../../utils/style/colors'
import NavIcon from './NavIcon'

/**
 * Styled aside element for the slide navigation container.
 */
const AsideContainer = styled.aside`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
    background-color: ${colors.backgroundDark};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .25);
    height: 100vh;
    position: fixed;
    left: 0;
    padding-top: 5.563rem;
`

/**
 * Styled paragraph element for the footer container.
 */
const FooterContainer = styled.p`
    color: ${colors.tertiary};
    transform: rotate(-180deg);
    writing-mode: vertical-rl;
    text-orientation: inherit;
    font-size:0.75rem;
`

/**
 * Function component SlideNav - Represent the slide navigation
 * @returns {JSX.Element} The rendered slide navigation component.
 */
function SlideNav() {
    return (
        <AsideContainer>
            <NavIcon />
            <FooterContainer>Copiryght, SportSee 2020</FooterContainer>
        </AsideContainer>
    )
}

export default SlideNav