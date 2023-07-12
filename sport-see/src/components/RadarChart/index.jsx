import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import UserService from "../../services/user.service";
import Performance from "../../models/Performance";
import colors from '../../utils/style/colors'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

/**
 * Function component RadialChartPerformance - Display a radar chart representing performance data.
 * @returns {JSX.Element} - The rendered RadialChartPerformance component.
 */
function RadarChartPerformance() {
    // Retrieves the value of the ID from the URL
    const { userId } = useParams();

    // State to store the user data
    const [userData, setContent] = useState("");

    useEffect(() => {
        // Fetches the main user data using the UserService
        UserService.getUserPerformance(userId).then(
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

    // Creates a new instance of the Performance class by passing the userData as an argument.
    const performanceDatas = new Performance(userData);

    // Prepare data for the chart
    const data = performanceDatas.data.map(performanceData => {
        const kindLabel = performanceDatas.kind[performanceData.kind];
        return {
            subject: kindLabel,
            A: performanceData.value,
            B: 110,
            fullMark: 150
        };
    });

    // Sort data for the chart
    const sortedData = data.map((item, index) => ({ ...item, index })).sort((a, b) => b.index - a.index);

    return (
        <ResponsiveContainer width='31%' height='100%'>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={sortedData} style={{ backgroundColor: colors.colorInfosName, borderRadius: '5px' }}>
                <PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 10, 23, 43, 68, 90]} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: colors.tertiary, fontSize: 12 }} />
                <PolarRadiusAxis angle={10} tick={false} axisLine={false} />
                <Radar dataKey="A" stroke={colors.primary} fill={colors.primary} fillOpacity={0.7} outerRadius="0%" />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChartPerformance