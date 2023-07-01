import styled from 'styled-components'
import colors from '../../utils/style/colors'

/**
 * Styled div element for the error message container.
 */
const ContainerMessage = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 100%;
    margin-top: 17.563rem;
    margin-left: 240px;
`
/**
 * Styled paragraph element for the error message.
 */
const Message = styled.p`
    font-size:8rem;
    color:${colors.primary};
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