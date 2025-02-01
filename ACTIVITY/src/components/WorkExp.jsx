function WorkExp (props) {
    return (
      <div className="w-100% mx-auto p-4 border-3 rounded-lg shadow-lg mb-4">
        <div className="w-100% mx-auto p-5 border rounded-lg mb-1">
        <h2 className="text-xl font-bold mb-4">Work Experience</h2>
        <h4 className="text-l font-semibold mb-1">{props.worksIn}</h4>
        <p className="text-sm text-gray-500 mb-1">{props.jobPeriod}</p>
        <p className="text-gray-700">{props.jobDes}</p>
      </div>
      </div>

    )
}

export default WorkExp;