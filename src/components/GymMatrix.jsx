import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
} from "recharts";

const GymMatrix = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("staticData.json")
            .then((res) => res.json())
            .then((d) => setData(d));
    }, []);

    return (
        <div className="my-8">
            <h1 className="md:text-3xl text-xl font-bold text-center">
                Overview of gym from the last year
            </h1>

            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 10,
                }}
            >
                {/* X-Axis for Month */}
                <XAxis
                    dataKey="month"
                    label={{
                        value: "Month",
                        position: "insideBottomRight",
                        offset: -5,
                    }}
                />

                {/* Y-Axis for Revenue (main axis) */}
                <YAxis
                    label={{
                        value: "Revenue ($)",
                        angle: -90,
                        position: "insideLeft",
                    }}
                />

                {/* Tooltip to show data on hover */}
                <Tooltip
                    formatter={(value) =>
                        new Intl.NumberFormat("en").format(value)
                    }
                />

                {/* Legend for identifying each line */}
                <Legend verticalAlign="top" height={36} />

                {/* Grid lines for readability */}
                <CartesianGrid strokeDasharray="3 3" />

                {/* Line for Average Attendance */}
                <Line
                    type="monotone"
                    dataKey="avgAttendance"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                    name="Avg. Attendance"
                />

                {/* Line for New Memberships */}
                <Line
                    type="monotone"
                    dataKey="newMemberships"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    name="New Memberships"
                />

                {/* Line for Revenue */}
                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#ffc658"
                    strokeWidth={2}
                    name="Revenue ($)"
                />
            </LineChart>
        </div>
    );
};

export default GymMatrix;
