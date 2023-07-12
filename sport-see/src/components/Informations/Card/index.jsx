import styled from 'styled-components'
import colors from '../../../utils/style/colors'

/**
 * Styled article element for the card.
 */
const ArticleCard = styled.article`
    width:100%;
    display:flex;
    align-items:center;
    margin-bottom: 1.2rem;
    padding:1.25rem;
    border-radius:5px;
    background: ${colors.backgroundLight};
    max-width: 100%;
    @media (min-width: 1440px) {
        padding: 13%;
        margin-bottom: 2.2rem;
    }
`

/**
 * Styled container for the icon.
 */
const ContainerIcon = styled.div`
    display:flex;
    align-items:center;
    flex:30%;
`
/**
 * Styled container for the text.
 */
const ContainerText = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    flex:70%;
    margin-right: 0.688rem;
`
/**
 * Styled span container for the icon.
 */
const ContainerSpan = styled.span`
    width:60px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    margin-right:1.5rem;
`
/**
 * Styled image element for the logo.
 */
const Logo = styled.img`
    z-index:10;
    opacity:1;
    max-width: 100%;
    height: auto;
`
/**
 * Styled paragraph element for the card name.
 */
const TextName = styled.p`
    color:${colors.colorInfosName};
    font-size:1.25rem;
    font-weight:700;
    line-height:1.5rem;
    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`
/**
 * Styled paragraph element for the card quantity.
 */
const TextQuantity = styled.p`
    color:${colors.colorInfosQuantity};
    font-size:0.875rem;
    font-weight:500;
    line-height:1.5rem;
`

/**
 * Function component Card - Create a card
 * @param {object} data - The data value.
 * @param {number} index - The index of the card.
 * @param {string} color - The color of the container span.
 * @param {string} logo - The source of the logo image.
 * @param {string} name - The name of the card.
 * @param {string} measure - The measurement unit.
 * @param {string} quantity - The quantity value.
 * @returns {JSX.Element} The rendered Card component.
 */

function Card({ data, index, color, logo, name, measure, quantity }) {

    return (
        <ArticleCard data={data} key={index}>
            <ContainerIcon>
                <ContainerSpan style={{ backgroundColor: color }}>
                    <Logo src={logo} />
                </ContainerSpan>
            </ContainerIcon>
            <ContainerText>
                <TextName>{name}{measure}</TextName>
                <TextQuantity>{quantity}</TextQuantity>
            </ContainerText>
        </ArticleCard>
    );
}

export default Card