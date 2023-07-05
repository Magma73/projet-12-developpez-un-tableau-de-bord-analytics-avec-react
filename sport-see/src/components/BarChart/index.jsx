import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import UserService from "../../services/user.service";
import Session from "../../models/Session";
import colors from '../../utils/style/colors'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

/**
 * Styled container for the BarChart.
 */
const ContainerBarChart = styled.div`
    min-width:835px;
    min-height:320px;
    background:${colors.backgroundLight};
`

// Styling for the title component
const Title = styled.p`
    padding-left:2rem;
    padding-top:1.65rem;
    color:${colors.colorScoreName};
    font-weight:500;
    font-size:0.938rem;
    line-heigth:1.625rem;
`

// Styling for the tooltip container
const ContainerTooltip = styled.div`
    width: 39px;
    height: 63px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:15px 0;
    color: ${colors.tertiary};
    background:${colors.primaryDarken};
    font-weight:500;
    font-size:7px;
    line-heigth:1.625rem;
    text-align:center;
    border:none;
    position:relative;
    top:-65px;
    right:-50px;
`

// Styling for the text within the tooltip
const TextTooltip = styled.p`
    color:${colors.tertiary};
    font-weight:500;
    font-size:7px;
    line-heigth:1.625rem;
    text-align:center;
`

/**
 * Function component BarChartActivity - Display a bar chart representing the daily activity with tooltips displaying weight and calorie values.
 * @returns {JSX.Element} - The rendered BarChartActivity component.
 */
function BarChartActivity() {
    // Retrieves the value of the ID from the URL
    const { userId } = useParams();

    // State to store the user data
    const [userData, setContent] = useState("");

    useEffect(() => {
        // Fetches the main user data using the UserService
        UserService.getUserActivity(userId).then(
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

    // Convert session data to Session instances
    const sessionInstances = userData.sessions.map(sessionData => new Session(sessionData));

    // Prepare data for the chart
    const data = sessionInstances.map(sessionInstance => {
        return {
            date: sessionInstance.day,
            poids: sessionInstance.kilogram,
            calories: sessionInstance.calories
        };
    });

    // Customize the Tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const weightValue = payload[0].payload.poids; // Retrieve the weight value directly from the payload
            const caloriesValue = payload[0].payload.calories; // Retrieve the calorie value directly from the payload

            return (
                <ContainerTooltip>
                    <TextTooltip>{weightValue} kg</TextTooltip>
                    <TextTooltip>{caloriesValue} kCal</TextTooltip>
                </ContainerTooltip>
            );
        }

        return null;
    };

    return (
        <ContainerBarChart>
            <Title>Activité quotidienne</Title>
            <BarChart
                width={835}
                height={250}
                data={data}
                margin={{
                    top: 53,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke={colors.colorStroke} />
                <XAxis dataKey="date" tickLine={false} axisLine={{ stroke: colors.colorStroke, strokeWidth: 1.5 }} tickMargin="18" tick={{ fill: colors.colorAxis, fontSize: 14, fontWeight: 500 }} />
                <YAxis type="number" tickCount={3} orientation="right" tickLine={false} axisLine={false} tickMargin="42" tick={{ fill: colors.colorAxis, fontSize: 14, fontWeight: 500 }} />

                <Tooltip content={<CustomTooltip />} />
                <Legend
                    wrapperStyle={{ position: "absolute", top: -18, left: 58 }}
                    verticalAlign="top" align="right" layout="horizontal" iconSize={8} formatter={(value, entry, index) => (
                        <span style={{ marginRight: '30px', color: colors.colorInfosQuantity, fontSize: '14px', fontWeight: '500', textAlign: "center" }}>{value}</span>
                    )}
                />
                <Bar name="Poids (kg)" dataKey="poids" legendType='circle' fill={colors.colorInfosName} barSize={7} radius={[4, 4, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" legendType='circle' fill={colors.primaryDarken} barSize={7} radius={[4, 4, 0, 0]} />
            </BarChart>
        </ContainerBarChart>
    )
}

export default BarChartActivity