
import { PieChart, Pie, Cell } from "recharts";
const Statistics = () => {
    const data = localStorage.getItem('donation-category')
    let parseData = JSON.parse(data)
    console.log(parseData);
    const storedDataLength = parseData.length
    console.log(storedDataLength);
    const donateData = [
        { name: "Group A", value: 12 },
        { name: "Group B", value: storedDataLength }
    ];
    const colors = ['#FF444A', '#00C49F'];
    return (
        <div className="max-w-screen-xl mx-auto mt-20 ">

            <div className="flex justify-center">

                <PieChart width={400} height={400}>
                    <Pie
                        data={donateData}
                        dataKey="value"
                        outerRadius={200}
                    >
                        {
                            donateData.map((data, idx) => (
                                <Cell key={`cell-${idx}`} fill={colors[idx % colors.length]}></Cell>
                            ))
                        }
                    </Pie>
                </PieChart>
            </div>
            <div className="flex gap-24 mt-12 justify-center">
                <div className="flex items-center gap-5">
                <h1 className="text-lg italic font-medium">Your Donation: </h1>
                    <div className="h-3 w-28 bg-[#00C49F]"></div>
                </div>
                    <div className="flex items-center gap-5">
                        <h1 className="text-lg italic font-medium">Total Donation: </h1>
                        <div className="h-3 w-28 bg-[#FF444A]">
                        </div>
                    </div>
            </div>
        </div>

    );
};

export default Statistics;