import styled from 'styled-components'
import colors from '../../utils/style/colors'
import React from "react";
import { RadialBarChart, RadialBar, Legend } from 'recharts';

/**
 * Styled container for the RadialBarChart.
 */
const ContainerRadialBarCharts = styled.div`
    min-width:258px;
    position:relative;
    margin:15px;
    background:${colors.backgroundLight};
`

/**
 * Styled container for the legend.
 */
const ContainerLegend = styled.div`
    position:absolute;
    top: 70px;
    right: 70px;
    width:160px;
    height:160px;
    border-radius:100%;
    background:${colors.tertiary};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

/**
 * Styled text for the score in the legend.
 */
const LegendTextScore = styled.p`
    text-align:center;
    color:${colors.colorInfosName};
    font-weight:700;
    font-size:1.625rem;
    line-heigth:1.625rem;
`

/**
 * Styled text for the goal in the legend.
 */
const LegendTextGoal = styled.span`
    text-align:center;
    color:${colors.colorInfosQuantity};
    font-weight:500;
    font-size:1rem;
    line-heigth:1.625rem;
    margin:0 3rem;
`

/**
 * Function component RadialBarChartScore - Display a radial bar chart representing a score
 * @param {number} score - The score value.
 * @returns {JSX.Element} - The rendered RadialBarChartScore component.
 */
function RadialBarChartScore({ score }) {

    const style = {
        top: 25,
        left: 40,
        lineHeight: "24px",
        color: colors.colorScoreName,
        fontSize: "0.938rem",
        fontWeight: 500
    };

    // Prepare data for the chart
    const data = [
        {
            name: "Score",
            value: score,
        }
    ];

    // Calculate the start and end angles of the chart based on the score
    const startAngleDegrees = -275
    const endAngle = startAngleDegrees + ((score / 100) * 360)

    return (
        <ContainerRadialBarCharts>
            <RadialBarChart width={300} height={300} cx={150} cy={150} innerRadius={100} outerRadius={87} barSize={20} data={data} startAngle={startAngleDegrees} endAngle={endAngle} fill={colors.primary}>
                <RadialBar minAngle={55} background clockWise={true} dataKey='value' cornerRadius='10' />
                <Legend iconSize={0} width={120} height={140} fill={colors.colorScoreName} layout='vertical' verticalAlign='top' align='left' wrapperStyle={style} />
            </RadialBarChart>
            <ContainerLegend>
                <LegendTextScore>{score}%</LegendTextScore>
                <LegendTextGoal>de votre objectif</LegendTextGoal>
            </ContainerLegend>
        </ContainerRadialBarCharts>
    );
}
export default RadialBarChartScore