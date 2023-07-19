import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import UserService from "../../services/user.service";
import AverageSession from "../../models/AverageSession";
import colors from '../../utils/style/colors'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, Rectangle, Dot, ResponsiveContainer } from 'recharts';

// Styling for the container tooltip component
const ContainerTooltip = styled.div`
    padding: 5px 7px;
    font-weight:500;
    font-size:0.5rem;
    line-heigth:1.625rem;
    color:${colors.secondary};
    background: ${colors.tertiary};
`
// Styling for the container legend component
const ContainerLegend = styled.div`
    position: absolute;
    bottom: 130px;
    left: 30px;
    @media (min-width: 1440px) {
        bottom: 185px;
    }
`
// Styling for the span legend component
const SpanLegend = styled.span`
    padding-right: 40px;
    font-weight:500;
    font-size:15px;
    line-heigth:1.5rem;
    color:${colors.tertiary};
    opacity: 0.5;
`

/**
 * Function component LineChartAverageSession - Display the average session line chart.
 * @returns {JSX.Element} - The rendered LineChartAverageSession component.
 */

const LineChartAverageSession = () => {

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
     * Custom Legend component for the LineChart.
     * @returns {JSX.Element} - The rendered CustomizedLegend component.
     */
    const CustomizedLegend = () => {
        return (
            <ContainerLegend>
                <SpanLegend>Durée moyenne des sessions</SpanLegend>
            </ContainerLegend>
        );
    };

    /**
     * Custom Active Dot component for the LineChart.
     * @param {Object} props - Props for the CustomActiveDot component.
     * @param {number} props.cx - The x-coordinate of the dot.
     * @param {number} props.cy - The y-coordinate of the dot.
     * @returns {JSX.Element} - The rendered CustomActiveDot component.
     */
    const CustomActiveDot = ({ cx, cy, payload }) => {
        // console.log(payload)
        // const { session } = payload.session;
        return (
            <Dot r={4} cx={cx * 1.08} cy={cy} fill={colors.tertiary} stroke={colors.strokeTertiary} strokeWidth={8}
                style={{ transform: 'translate(-3%, 0%)' }}
            />

        );
    };

    /**
     * CustomCursor component - Render a custom cursor for a chart.
     * @param {Object} props - The props object for CustomCursor component.
     * @param {Array} props.points - An array of points representing the cursor position.
     * @param {number} props.width - The width of the cursor.
     * @returns {JSX.Element} - The rendered CustomCursor component.
     */
    const CustomCursor = (props) => {
        const { points, width } = props;
        const { x, y } = points[0];

        return (
            <Rectangle
                background={colors.primaryDarken}
                stroke={colors.primaryDarken}
                x={x}
                y={y - 10}
                width={width}
                height={268}
                opacity={0.1}
                style={{ transform: 'scaleX(1.12)', transformOrigin: '50% 50%' }}
            />
        );
    };

    return (
        <ResponsiveContainer width='31%' height='100%'  >
            <LineChart data={data} style={{ backgroundColor: colors.primary, borderRadius: '5px' }}   >
                <XAxis dataKey="date" tickLine={false} tickMargin="12" axisLine={false} tick={{ fill: colors.tertiary, fontSize: 12, fontWeight: 500, opacity: 0.5 }} padding={{ right: 10, left: 10 }} />
                <YAxis hide={true} tick={false} tickCount={3} orientation="right" tickLine={false} axisLine={false} domain={[0, 'dataMax + 130']} />
                <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
                <Legend content={<CustomizedLegend />} />
                <Line type="natural" dataKey="session" dot={false} stroke={colors.tertiary} strokeWidth={2} opacity={0.5} activeDot={<CustomActiveDot />} style={{ transform: 'scaleX(1.12)', transformOrigin: '50% 50%' }} />
            </LineChart >
        </ResponsiveContainer >
    )
}

export default LineChartAverageSession