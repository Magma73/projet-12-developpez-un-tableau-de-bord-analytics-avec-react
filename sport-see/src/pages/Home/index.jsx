import User from "../../models/User";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Navigate } from "react-router-dom";
// import useFetchData from "../../__mocks__"
import UserService from "../../services/user.service";
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import RadialBarChartScore from "../../components/RadialBarChart";
// import Card from "../../components/Informations/Card";
import Informations from "../../components/Informations";
import BarChartActivity from "../../components/BarChart"
import LineChartAverageSession from "../../components/LineChart";
import RadarChartPerformance from "../../components/RadarChart";

/**
 * Container for the home section.
 */
const SectionContainer = styled.section`
    width: 100%;
    padding-top: 3rem;
    padding-left: 7.5vw;
    padding-right: 4.25vw;
    // width: calc(100% - 335px);
    // margin:auto;
    // margin-top: 4.2rem;
    // flex:90%;
    @media (min-width: 1440px) {
        padding-top: 4.2rem;
        padding-left: 7.5vw;
        padding-right: 1.25vw;
    }
`
/**
 * Title of the home page.
 */
const Title = styled.h1`
    font-size:2.5rem;
    font-weight:500;
    line-height:1.5rem;
    margin-bottom:2.563rem;
    @media (min-width: 1440px) {
        font-size:3rem;
    }
`
/**
 * Name of the user.
 */
const Name = styled.span`
    color:${colors.primary};
`
/**
 * Tagline for the home page.
 */
const Tag = styled.p`
    font-size:1rem;
    font-weight:400;
    line-height:1.5rem
    color:${colors.secondary};
    margin-bottom:2.8rem;
    @media (min-width: 1440px) {
        margin-bottom:4.8rem;
        font-size:1.125rem;
    }
`
/**
 * Container for the dashboard section.
 */
const ContainerDashboard = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`
/**
 * Container for the diagrams section.
 */
const ContainerDiagrams = styled.div`
    display:flex;
    flex-direction:column;
    margin-right: 1.875rem;
    width:100%;
    max-width: 68%;
    @media (min-width: 1440px) {
        max-width: 75%;
    }
`
/**
 * Container for the activity bar chart.
 */
const ContainerBarActivity = styled.div`
    width:100%;
    height:250px;
    @media (min-width: 1440px) {
        height:320px;
    }
`
/**
 * Container for the details diagrams.
 */
const ContainerDetailsDiagrams = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:1.25rem;
    height:210px;
    @media (min-width: 1440px) {
        margin-top:unset;
        height:263px;
    }

`
/**
 * Container for the information cards.
 */
const ContainerCards = styled.div`
    display:flex;
    max-width:258px;
    // flex:20%;
    // width:100%;
`
/**
 * Function component Home - Render the home page.
 * @returns {JSX.Element} - The rendered Home component.
 */

function Home() {
    // Get the value of ID from the URL
    const { userId } = useParams();

    const [userData, setContent] = useState("");
    const [error, setError] = useState(false);

    // Fetches the user main data
    useEffect(() => {
        UserService.getUserMainData(userId)
            .then((response) => {
                setContent(response);
            })
            .catch((error) => {
                console.log(error)
                setError(true);
            });
    }, [userId]);

    // Returns the Error page if there is an error
    if (error) {
        return <Navigate to="/error" />;
    }

    // Returns the Error page if there is an error
    if (userData) {

        // Creates a new instance of the User class
        const user = new User(userData);

        return (

            <SectionContainer>
                <Title>Bonjour <Name>{user.firstName}</Name></Title>
                <Tag>Félicitations ! Vous avez explosé vos objectifs hier 👏</Tag>

                <ContainerDashboard>
                    <ContainerDiagrams>
                        <ContainerBarActivity>
                            <BarChartActivity />
                        </ContainerBarActivity>
                        <ContainerDetailsDiagrams>
                            <LineChartAverageSession />
                            <RadarChartPerformance />
                            <RadialBarChartScore score={user.todayScore} />
                        </ContainerDetailsDiagrams>


                    </ContainerDiagrams>
                    {/* <ContainerCards> */}
                    <Informations />
                    {/* </ContainerCards> */}
                </ContainerDashboard>
            </SectionContainer>
        );
    }
}


export default Home