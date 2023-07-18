import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import UserService from "../../services/user.service";
import Session from "../../models/Session";
import colors from '../../utils/style/colors'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
const BarChartActivity = () => {
    // Retrieves the value of the ID from the URL
    const { userId } = useParams();

    // State to store the user data
    const [userDataActivity, setContent] = useState("");

    useEffect(() => {
        // Fetches the main user data using the UserService
        UserService.getUserActivity(userId).then(
            (response) => {
                // Sets the user data in the state
                setContent(response);
            },
            (error) => {
                const _userDataActivity =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                // Sets the error message or data in the state
                setContent(_userDataActivity);
            }
        );
    }, [userId]);

    if (!userDataActivity) {
        // Renders a message if no user data is available
        return <div>Aucune donnée disponible.</div>;
    }

    // Convert session data to Session instances
    const sessionInstances = userDataActivity.sessions.map(sessionData => new Session(sessionData));

    // Prepare data for the chart
    const data = sessionInstances.map(sessionInstance => {
        return {
            date: sessionInstance.day,
            poids: sessionInstance.kilogram,
            calories: sessionInstance.calories
        };
    });


    /**
     * Custom Tooltip component for the BarChart.
     * @param {Object} props - Props for the CustomTooltip component.
     * @param {boolean} props.active - Indicates if the tooltip is active.
     * @param {Array} props.payload - The payload data for the tooltip.
     * @returns {JSX.Element|null} - The rendered CustomTooltip component.
     */
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
        <ResponsiveContainer width="100%" height="100%" >
            <BarChart style={{ backgroundColor: colors.backgroundLight, borderRadius: '5px' }}

                data={data}
                barSize={6}
                barGap={8}
                margin={{
                    top: 90,
                    right: 30,
                    left: 40,
                    bottom: 32
                }}
            >
                <text x="100" y="40" textAnchor="middle" style={{ fontSize: '0.938rem', fontWeight: 500, lineHeigth: '1.625rem', fill: colors.colorScoreName }}>
                    Activité quotidienne
                </text>

                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke={colors.colorStroke} />
                <XAxis dataKey="date" tickLine={false} axisLine={{ stroke: colors.colorStroke, strokeWidth: 1.5 }} tickMargin="14" tick={{ fill: colors.colorAxis, fontSize: 14, fontWeight: 500 }} />
                <YAxis yAxisId="poids" domain={['dataMin -1', 'dataMax']} tickCount={3} orientation="right" tickLine={false} axisLine={false} tickMargin="38" tick={{ fill: colors.colorAxis, fontSize: 14, fontWeight: 500 }} />
                <YAxis yAxisId="calories" hide orientation="left" />

                <Tooltip content={<CustomTooltip />} cursor={{ fill: colors.backgroundCursor }} />
                <Legend
                    wrapperStyle={{ position: "absolute", top: 25, left: 58 }}
                    verticalAlign="top" align="right" layout="horizontal" iconSize={8} formatter={(value, entry, index) => (
                        <span style={{ marginRight: '30px', color: colors.colorInfosQuantity, fontSize: '14px', fontWeight: '500', textAlign: "center" }}>{value}</span>
                    )}
                />
                <Bar name="Poids (kg)" dataKey="poids" yAxisId="poids" legendType='circle' fill={colors.colorInfosName} radius={[4, 4, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" yAxisId="calories" legendType='circle' fill={colors.primaryDarken} radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BarChartActivity