function Skills (props) {
    return (
      <div className="w-100% mx-auto p-4 border-3 rounded-lg mb-4">
         <div className="w-100% mx-auto p-4 border rounded-lg mb-1">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li> <a href="" className="text-blue-500">{props.skill1}</a></li>
          <li> <a href="" className="text-blue-500">{props.skill2}</a> </li>
          <li> <a href="" className="text-blue-500">{props.skill3}</a></li>
        </ul>
      </div>
     </div>

    )
}

export default Skills;
