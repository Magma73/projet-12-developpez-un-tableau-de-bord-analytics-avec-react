import styled from 'styled-components'
import colors from '../../utils/style/colors'
import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

/**
 * Styled container for the legend.
 */
const ContainerLegend = styled.div`
    position:absolute;
    top: 55px;
    left: -65px;
    width:10rem;
    height:10rem;
    border-radius:100%;
    background:${colors.tertiary};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    transform: scale(0.8);
    transform-origin: 30% 30%;
    @media (min-width: 1440px) {
          transform: none;
          transform-origin: none;
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

const RadialBarChartContainer = styled(ResponsiveContainer)`
.recharts-area {
  transform: scale(0.8);
  transform-origin: 50% 100%;
}
  @media (min-width: 1440px) {
    .recharts-area{
      transform: none;
      transform-origin: none;
    }
  }
`

/**
 * Function component RadialBarChartScore - Display a radial bar chart representing a score
 * @param {number} score - The score value.
 * @returns {JSX.Element} - The rendered RadialBarChartScore component.
 */
const RadialBarChartScore = ({ score }) => {

    // Prepare data for the chart
    const data = [
        {
            name: "Score",
            value: score,
            fill: colors.primary,
        }
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
        <RadialBarChartContainer width='31%' height='100%'>
            <RadialBarChart cx="55%" cy="49%" innerRadius={100} outerRadius={87} barSize={20} data={data} startAngle={startAngleDegrees} endAngle={endAngle} style={{ backgroundColor: colors.backgroundLight, borderRadius: '5px', paddingTop: '10px' }} >
                <text x="20%" y="15%" textAnchor="middle" style={{ fontSize: '0.938rem', fontWeight: 500, lineHeigth: '1.625rem', fill: colors.colorScoreName, padding: '10px' }}>
                    Score
                </text>
                <RadialBar minAngle={55} background clockWise={true} dataKey='value' cornerRadius='10' />
                <Legend iconSize={0} content={<CustomizedLegend />} layout='vertical' verticalAlign='center' align='center' />
            </RadialBarChart>
        </RadialBarChartContainer>
    );
}

RadialBarChartScore.propTypes = {
    score: PropTypes.number
}

export default RadialBarChartScore