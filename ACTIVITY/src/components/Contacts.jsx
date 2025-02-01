
function Contacts (props) {
    return (
      <div className="w-100% mx-auto p-4 border-3 rounded-lg shadow-lg mb-4">
         <div className="w-100% mx-auto p-4 border rounded-lg mb-1">
        <h2 className="text-xl font-bold mb-3">Contact Information</h2>
        <ul className="space-y-">
          <li><strong>Email:</strong> <a href="" className="text-blue-500">{props.email}</a> </li>
          <li><strong>Phone:</strong> <a href="" className="text-blue-500">{props.phone}</a> </li> 
          <li><strong>Address:</strong> <a href="" className="text-blue-500">{props.address}</a> </li>
        </ul>
      </div>
      </div>
     
    )
}

export default Contacts;