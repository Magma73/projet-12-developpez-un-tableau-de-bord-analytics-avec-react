import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'
import colors from '../../utils/style/colors'

const HeaderContainer = styled.header`
    display:flex;
    align-items:center;
    justify-content: space-between;
    background-color: ${colors.backgroundDark};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .25);
    padding: 1rem 1.75rem 0.7rem 1.75rem;
`

const LogoContainer = styled.div`
    display:flex;
    flex:10%;
    margin-right: 9.3rem;
`

const HomeLogo = styled.img`
    width:178px;
    height:auto;
`

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    flex:90%;
    min-width:994px;
`

const UlContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    width:100%;
`

const LiContainer = styled.li`
    display:flex;
    justify-content: space-between;
    margin-right: 46px;
`

const LinkContainer = styled.a`
    color: ${colors.tertiary};
    font-size:1.5rem;
    font-weight:500;
`

function Header() {

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to="/#">
                    <HomeLogo src={Logo} alt='logo-sportsee' />
                </Link>
            </LogoContainer>

            <NavContainer>
                <UlContainer>
                    <LiContainer><LinkContainer href="/#" >Accueil</LinkContainer ></LiContainer>
                    <LiContainer><LinkContainer href="/#" >Profil</LinkContainer ></LiContainer>
                    <LiContainer><LinkContainer href="/#" >Réglages</LinkContainer ></LiContainer>
                    <LiContainer><LinkContainer href="/#" >Communauté</LinkContainer ></LiContainer>
                </UlContainer>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header