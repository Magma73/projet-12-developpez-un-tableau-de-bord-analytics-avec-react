import User from "../../models/User";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
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
const Title = styled.h1`
    font-size:2.5rem;
    font-weight:500;
    line-height:1.5rem;
    margin-bottom:2.563rem;
    @media (min-width: 1440px) {
        font-size:3rem;
    }
`

const Name = styled.span`
    color:${colors.primary};
`

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

const ContainerDashboard = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`

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
const ContainerBarActivity = styled.div`
    width:100%;
    height:250px;
    @media (min-width: 1440px) {
        height:320px;
    }
`

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

const ContainerCards = styled.div`
    display:flex;
    max-width:258px;
    // flex:20%;
    // width:100%;
`
/**
 *
 * @returns
 *
 */


function Home() {
    const { userId } = useParams(); // Récupère la valeur de l'ID depuis l'URL



    const [userData, setContent] = useState("");

    useEffect(() => {
        UserService.getUserMainData(userId).then(
            (response) => {
                // console.log("response : ", response)
                setContent(response);
            },
            (error) => {
                const _userData =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_userData);
            }
        );
    }, [userId]);


    if (!userData) {
        return <div>Aucune donnée disponible.</div>;
    }


    // console.log("userData: ", userData)

    // console.log(user._id); // Affiche: 1
    // console.log(user._firstName); // Affiche: John
    // console.log(user._lastName); // Affiche: Doe
    // console.log(user._age); // Affiche: 30
    // console.log(user._todayScore); // Affiche: 100
    // console.log(user._keyData); // Affiche: 2000

    // console.log(user._proteinCount); // Affiche: 50
    // console.log(user._carbohydrateCount); // Affiche: 300
    // console.log(user._lipidCount); // Affiche: 20

    // console.log(userData)
    // const { id, userInfos, score, keyData } = userData.data;

    const user = new User(userData);
    // console.log(user);
    // console.log(user._calorieCount); // Affiche: 2000


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


export default Home