/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { PieChart, Pie, Cell } from "recharts";
const Statistics = () => {
    const data = localStorage.getItem('donation-category')
    let parseData = JSON.parse(data)
    const storedDataLength = parseData.length
    const storedValue = 12 - storedDataLength
    const donateData = [
        { name: "Group A", value: storedValue },
        { name: "Group B", value: storedDataLength }
    ];
    const COLORS = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle + RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}

            </text>
        )
    }
    return (
        <div className="max-w-screen-xl mx-auto mt-8 md:mt-20 ">
            <div className="flex justify-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={donateData}
                        dataKey="value"
                        type="pie"
                       
                        series={[12, 6]}
                        label={renderCustomizedLabel}
                        options={{
                            labels: ['total donate', 'your donate']
                        }}
                        outerRadius={150}
                    >
                        {
                            donateData.map((data, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}></Cell>
                            ))
                        }
                    </Pie>
                </PieChart>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-24 mt-0 p-8 md:p-0 md:mt-12 justify-center">
                <div className="flex items-center gap-5">
                    <h1 className="text-lg italic font-medium">Your Donation: </h1>
                    <div className="h-3 w-16 lg:w-28 bg-[#00C49F]"></div>
                </div>
                <div className="flex items-center gap-5">
                    <h1 className="text-lg italic font-medium">Total Donation: </h1>
                    <div className="h-3 w-16 lg:w-28 bg-[#FF444A]">
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Statistics;