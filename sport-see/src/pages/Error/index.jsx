import styled from 'styled-components'
import colors from '../../utils/style/colors'

/**
 * Styled div element for the error message container.
 */
const ContainerMessage = styled.div`
    width: calc(100% - 300px);
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
/**
 * Styled paragraph element for the error message.
 */
const Message = styled.p`
    font-size:5rem;
    margin-bottom: 2rem;
    color:${colors.primary};
    @media (min-width: 1440px) {
        font-size:8rem;
    }
`
/**
 * Styled anchor element for the home link.
 */
const LinkHome = styled.a`
    text-decoration:underline;
`
/**
 * Function page Error - Represent the Error page
 * @returns {JSX.Element} The rendered error component.
 */
function Error() {
    return (
        <ContainerMessage>
            <Message>Page d'erreur 404</Message>
            <LinkHome href="/">Retour à la page d'accueil</LinkHome>
        </ContainerMessage>
    )
}
export default Error