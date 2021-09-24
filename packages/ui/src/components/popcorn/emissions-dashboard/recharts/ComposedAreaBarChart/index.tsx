import { ChartData } from '@popcorn/ui/src/interfaces/emissions-dashboard';
import * as convert from 'convert-units';
import React from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Spinner from '../../Spinner';

export interface ComposedAreaBarChartProps {
  data: ChartData[];
  height?: number;
  width?: number;
  dataKeyXAxis: string;
  dataKeyYAxis1: string;
  dataKeyYAxis2: string;
  areaChartFillColor?: string;
  barChartFillColor?: string;
  gridColor?: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: any;
  payload?: any;
  label?: any;
}) => {
  if (active && payload && payload.length) {
    const emissionsConverted = convert(payload[1].value).from('mcg').toBest();
    return (
      <div className="bg-gray-50 p-2 rounded-md">
        <p className="text-sm ">{`${new Date(Date.parse(label)).toLocaleString(
          'en-US',
          {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          },
        )}`}</p>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-blue-700 mr-1"></div>
          <p className="text-xs text-gray-500">{`Transactions: ${payload[0].value.toLocaleString()}`}</p>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-blue-300 mr-1"></div>
          <p className="text-xs text-gray-500">{`CO2 Emissions:  ${Math.round(
            emissionsConverted.val,
          )}${emissionsConverted.unit}`}</p>
        </div>
      </div>
    );
  }
  return null;
};

const ChartContentWrapper: React.FC<{ height: number; children: JSX.Element }> =
  (props) => {
    return (
      <div
        className="w-full flex flex-wrap content-center border-2 border-gray-50 justify-center "
        style={{
          objectFit: 'cover',
          height: props.height,
          marginTop: 5,
          marginRight: 30,
          marginLeft: 30,
          marginBottom: 5,
        }}
      >
        {props.children}
      </div>
    );
  };

export const ChartLoading: React.FC<{ height: number }> = ({ height }) => {
  return (
    <ChartContentWrapper height={height}>
      <Spinner />
    </ChartContentWrapper>
  );
};

export const ChartError: React.FC<{ height: number }> = ({ height }) => {
  return (
    <ChartContentWrapper height={height}>
      <p className="text-lg text-gray-500">Error loading transactions</p>
    </ChartContentWrapper>
  );
};

export const ChartEmpty: React.FC<{ height: number }> = ({ height }) => {
  return (
    <ChartContentWrapper height={height}>
      <p className="text-lg text-gray-500">No transactions were made</p>
    </ChartContentWrapper>
  );
};

export const ComposedAreaBarChart: React.FC<ComposedAreaBarChartProps> = ({
  data,
  height = 200,
  width,
  dataKeyXAxis = 'date',
  dataKeyYAxis1 = 'numTransactions',
  dataKeyYAxis2 = 'co2Emissions',
  areaChartFillColor = '#64b5f6',
  barChartFillColor = '#1976d2',
  gridColor = '#E0E0E0',
}) => {
  const containsData =
    data.reduce((pr, cu) => {
      return pr + cu.co2Emissions;
    }, 0) > 0;
  return containsData ? (
    <ResponsiveContainer
      className="justify-self-center"
      width={width}
      height={height}
    >
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis interval={0} hide={true} dataKey={dataKeyXAxis} />
        <YAxis dataKey={dataKeyYAxis1} hide={true} yAxisId="left" />
        <YAxis
          dataKey={dataKeyYAxis2}
          hide={true}
          yAxisId="right"
          orientation="right"
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          radius={[5, 5, 0, 0]}
          yAxisId="left"
          type="monotone"
          dataKey={dataKeyYAxis1}
          fill={barChartFillColor}
        />
        <Area
          yAxisId="right"
          type="monotone"
          dataKey={dataKeyYAxis2}
          fill={areaChartFillColor}
        />
      </ComposedChart>
    </ResponsiveContainer>
  ) : (
    <ChartEmpty height={height} />
  );
};
