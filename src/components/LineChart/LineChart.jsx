import { LineChart as LC, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const mathMarksDataWithId = [
        { id: 1, student: 'Alice', marks: 85 },
        { id: 2, student: 'Bob', marks: 78 },
        { id: 3, student: 'Charlie', marks: 92 },
        { id: 4, student: 'David', marks: 65 },
        { id: 5, student: 'Eva', marks: 88 },
        { id: 6, student: 'Frank', marks: 75 },
        { id: 7, student: 'Grace', marks: 96 },
        { id: 8, student: 'Harry', marks: 80 },
        { id: 9, student: 'Ivy', marks: 89 },
        { id: 10, student: 'Jack', marks: 72 },
      ];
      
    return (
        <div>
            <LC width={600} height={400} data={mathMarksDataWithId}>
                <XAxis dataKey='student'></XAxis>
                <YAxis ></YAxis>
                <Line dataKey="marks"></Line>
            </LC>
        </div>
    );
};

export default LineChart;