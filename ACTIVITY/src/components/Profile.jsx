import photo from '/JILLI.jfif';

function Profile (props) {
    return(
        <div className="w-120 mx-auto p-6 border-3 rounded-lg shadow-lg mb-4">
            <div className="flex flex-col items-center border p-4 rounded-lg">
                <img src={photo} alt="profile" className="w-24 h-24 rounded-full"/>
                <h2 className="text-xl font-bold mt-2">
                    {props.profileName}
                </h2>
                <p className="ext-grey-600 text-center">{props.profileInfo}</p>
            </div>
        </div>
    )
}
export default Profile;
