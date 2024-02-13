import "./app-info.css";

const AppInfo = ({allEmployee, increaseEmployee}) => {
    return (
        <div className="app-info">
            <h1>Admin panel</h1>
            <h2>Total employees in the company: {allEmployee}</h2>
            <h2>Employees with bonus: {increaseEmployee}</h2>
        </div>
    )
}

export default AppInfo;