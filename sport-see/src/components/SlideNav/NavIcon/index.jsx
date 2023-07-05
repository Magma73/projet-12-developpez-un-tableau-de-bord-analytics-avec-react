import styled from 'styled-components'
import colors from '../../../utils/style/colors'
import YogaIcon from '../../../assets/icons/yoga.svg'
import SwimIcon from '../../../assets/icons/swim.svg'
import BikeIcon from '../../../assets/icons/bike.svg'
import DumbbellIcon from '../../../assets/icons/dumbbell.svg'

/**
 * Styled nav element for the navigation container.
 */
const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
/**
 * Styled div element for the navigation icon container.
 */
const NavIconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:64px;
    height:64px;
    margin: 0.625rem 1.625rem;
    background-color: ${colors.tertiary};
    border-radius:6px;
    cursor:pointer;
`
/**
 * Styled image element for the icon container.
 */
const IconContainer = styled.img`
    width:60%;
    height:auto;
`
/**
 * Function component Informations - Represent the navigation icons
 * @returns {JSX.Element} The rendered navigation icon component.
 */
function NavIcon() {
    const IconsArray = [YogaIcon, SwimIcon, BikeIcon, DumbbellIcon]
    return (
        <NavContainer>
            {IconsArray.map((Icon, index) => (
                <NavIconContainer key={index}>
                    <IconContainer src={Icon} />
                </NavIconContainer>
            ))}
        </NavContainer>
    )
}

export default NavIcon