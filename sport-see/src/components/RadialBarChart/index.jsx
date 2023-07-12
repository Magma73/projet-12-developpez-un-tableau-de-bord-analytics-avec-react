import styled from 'styled-components'
import colors from '../../utils/style/colors'
import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

/**
 * Styled container for the RadialBarChart.
 */
const ContainerRadialBarCharts = styled.div`
    width:258px;
    position:relative;
    border-radius:5px;
    background:${colors.backgroundLight};
`

/**
 * Styled container for the legend.
 */
const ContainerLegend = styled.div`
    position:absolute;
    top: 45px;
    left: -65px;
    width:8rem;
    height:8rem;
    border-radius:100%;
    background:${colors.tertiary};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media (min-width: 1440px) {
        width:10rem;
        height:10rem;
        left: -80px;
    }
`

/**
 * Styled text for the score in the legend.
 */
const LegendTextScore = styled.p`
    text-align:center;
    color:${colors.colorInfosName};
    font-weight:700;
    font-size:1.5rem;
    line-heigth:1.625rem;
    @media (min-width: 1440px) {
        font-size:1.625rem;
    }
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
        // top: 25,
        // left: 40,
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
            fill: colors.primary,
        }
        // {
        //     name: "Total",
        //     value: 100,
        //     fill: colors.tertiary,
        // }
    ];

    // Calculate the start and end angles of the chart based on the score
    const startAngleDegrees = -275
    const endAngle = startAngleDegrees + ((score / 100) * 360)

    const CustomizedLegend = ({ payload }) => {
        const score = payload[0].payload.value

        return (
            <ContainerLegend>
                <LegendTextScore>{score}%</LegendTextScore>
                <LegendTextGoal>de votre objectif</LegendTextGoal>
            </ContainerLegend>
        );
    };

    return (
        <ResponsiveContainer width='31%' height='100%'  >
            <RadialBarChart cx="50%" cy="49%" innerRadius={100} outerRadius={87} barSize={20} data={data} startAngle={startAngleDegrees} endAngle={endAngle} style={{ backgroundColor: colors.backgroundLight, borderRadius: '5px' }}>
                {/* <RadialBarChart width={300} height={150} innerRadius={100} outerRadius={87} barSize={20} data={data} startAngle={startAngleDegrees} endAngle={endAngle} > */}
                <text x="20%" y="15%" textAnchor="middle" style={{ fontSize: '0.938rem', fontWeight: 500, lineHeigth: '1.625rem', fill: colors.colorScoreName }}>
                    Score
                </text>
                <RadialBar minAngle={55} background clockWise={true} dataKey='value' cornerRadius='10' />
                {/* <text x="250" y="150" textAnchor="middle" style={{ fontSize: '0.938rem', fontWeight: 500, lineHeigth: '1.625rem', fill: colors.colorScoreName }}>
                    12%
                </text> */}

                <Legend iconSize={0} content={<CustomizedLegend />} layout='vertical' verticalAlign='center' align='center' />

                {/* <Legend iconSize={0} layout='vertical' verticalAlign='center' align='center' wrapperStyle={{ width: '160px', height: '160px', position: 'absolute', top: 60, borderRadius: '100%', background: 'pink' }} /> */}
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

RadialBarChartScore.propTypes = {
    score: PropTypes.number
}


export default RadialBarChartScore