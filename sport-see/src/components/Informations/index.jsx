import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import UserService from "../../services/user.service";
import User from "../../models/User";
import Card from "../../components/Informations/Card";
import colors from '../../utils/style/colors'
import Apple from '../../assets/icons/apple.svg'
import Cheeseburger from '../../assets/icons/cheeseburger.svg'
import Chicken from '../../assets/icons/chicken.svg'
import Energy from '../../assets/icons/energy.svg'

/**
 * Styled div element for the container informations
 */
const ContainerInformations = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

/**
 * Function component Informations - Represent the Informations page
 * @returns {JSX.Element} - The rendered Informations component
 */

function Informations() {
    // Retrieves the value of the ID from the URL
    const { userId } = useParams();

    // State to store the user data
    const [userData, setContent] = useState("");

    useEffect(() => {
        // Fetches the main user data using the UserService
        UserService.getUserMainData(userId).then(
            (response) => {
                // Sets the user data in the state
                setContent(response);
            },
            (error) => {
                const _userData =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                // Sets the error message or data in the state
                setContent(_userData);
            }
        );
    }, [userId]);


    if (!userData) {
        // Renders a message if no user data is available
        return <div>Aucune donnée disponible.</div>;
    }

    // Creates a User instance from the retrieved user data
    const user = new User(userData);

    // Extracts the keys of the keyData object from the user
    const datas = Object.keys(user.keyData)

    // Extracts the individual count values from the user
    const calorieCount = user.calorieCount
    const proteinCount = user.proteinCount
    const carbohydrateCount = user.carbohydrateCount
    const lipidCount = user.lipidCount

    // Defines the color values based on the colors object
    const colorCalorie = colors.primary + 11
    const colorProtein = colors.colorProtein + 11
    const colorGlucid = colors.colorGlucid + 11
    const colorLipid = colors.colorLipid + 11

    return (
        <ContainerInformations>
            {datas.map((data, index) => (
                <Card
                    data={data}
                    key={index}
                    color={data === "calorieCount"
                        ? colorCalorie
                        : data === "proteinCount"
                            ? colorProtein
                            : data === "carbohydrateCount"
                                ? colorGlucid
                                : data === "lipidCount"
                                    ? colorLipid
                                    : "transparent"}

                    logo={data === "calorieCount" ? Energy : data === "proteinCount" ? Chicken : data === "carbohydrateCount" ? Apple : data === "lipidCount" ? Cheeseburger : null} alt={"logo-nutriment"}
                    name={data === "calorieCount" ? calorieCount : data === "proteinCount" ? proteinCount : data === "carbohydrateCount" ? carbohydrateCount : data === "lipidCount" ? lipidCount : null}
                    measure={data === "calorieCount" ? "kCal" : "g"}
                    quantity={data === "calorieCount" ? "Calories" : data === "proteinCount" ? "Protéines" : data === "carbohydrateCount" ? "Glucides" : data === "lipidCount" ? "Lipides" : null} >

                </Card>
            ))}
        </ContainerInformations >
    );
}

export default Informations