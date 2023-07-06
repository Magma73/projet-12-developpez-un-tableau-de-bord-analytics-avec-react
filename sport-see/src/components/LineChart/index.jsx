import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import UserService from "../../services/user.service";
import AverageSession from "../../models/AverageSession";
import colors from '../../utils/style/colors'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Styling for the container tooltip component
const ContainerTooltip = styled.div`
    padding: 5px 7px;
    font-weight:500;
    font-size:0.5rem;
    line-heigth:1.625rem;
    color:${colors.secondary};
    background: ${colors.tertiary};
`

/**
 * Function component LineChartAverageSession - Display the average session line chart.
 * @returns {JSX.Element} - The rendered LineChartAverageSession component.
 */
function LineChartAverageSession() {
    // Retrieves the value of the ID from the URL
    const { userId } = useParams();

    // State to store the user data
    const [userData, setContent] = useState("");

    useEffect(() => {
        // Fetches the main user data using the UserService
        UserService.getUserAverageSessions(userId).then(
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

    // Convert session data to AverageSession instances
    const averageSessionInstances = userData.sessions.map(sessionData => new AverageSession(sessionData));

    // Prepare data for the chart
    const data = averageSessionInstances.map(averageSessionInstance => {
        return {
            date: averageSessionInstance.day,
            session: averageSessionInstance.sessionLength
        };
    });

    /**
     * Custom Tooltip component for the LineChart.
     * @param {Object} props - Props for the CustomTooltip component.
     * @param {boolean} props.active - Indicates if the tooltip is active.
     * @param {Array} props.payload - The payload data for the tooltip.
     * @returns {JSX.Element|null} - The rendered CustomTooltip component.
     */

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const sessionLength = payload[0].payload.session;

            return (
                <ContainerTooltip>
                    {sessionLength} min
                </ContainerTooltip>
            );
        }

        return null;
    };

    /**
     * Custom Active Dot component for the LineChart.
     * @param {Object} props - Props for the CustomActiveDot component.
     * @param {number} props.cx - The x-coordinate of the dot.
     * @param {number} props.cy - The y-coordinate of the dot.
     * @returns {JSX.Element} - The rendered CustomActiveDot component.
     */
    const CustomActiveDot = ({ cx, cy }) => (
        <svg
            x={cx - 5} // Adjusted x-coordinate to center the SVG icon
            y={cy - 5} // Adjusted y-coordinate to center the SVG icon
            width={10} // Width of the SVG icon
            height={10} // Height of the SVG icon
            viewBox="0 0 18 19" // Viewbox of the SVG icon
            fill='white'
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z" fill="white" />
            <path d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z" stroke="white" strokeOpacity="0.5" strokeWidth="5" />
        </svg>
    );

    return (
        <ResponsiveContainer width={258} height="100%">
            <LineChart data={data} style={{ backgroundColor: colors.primary, borderRadius: '5px' }}>
                <XAxis dataKey="date" tickLine={false} tickMargin="18" axisLine={false} tick={{ fill: colors.tertiary, fontSize: 12, fontWeight: 500, opacity: 0.5 }} padding={{ right: 10, left: 10 }} />
                <YAxis hide={true} tick={false} tickCount={3} orientation="right" tickLine={false} axisLine={false} domain={[0, 'dataMax + 130']} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: colors.tertiary, stroke: colors.primaryDarken, strokeWidth: 42 }} />
                <Legend iconSize={0} align='left' formatter={(value, entry, index) => (
                    <span style={{ position: 'absolute', bottom: '180px', left: '30px', paddingRight: '40px', color: colors.tertiary, fontSize: '15px', fontWeight: 500, lineHeight: '24px', opacity: 0.5 }}>Durée moyenne des sessions</span>
                )}></Legend>
                <Line type="monotoneX" dataKey="session" dot={false} stroke={colors.tertiary} strokeWidth={2} opacity={0.5} activeDot={<CustomActiveDot />} />
            </LineChart >
        </ResponsiveContainer >
    )
}

export default LineChartAverageSession