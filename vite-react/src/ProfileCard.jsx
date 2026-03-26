import PropTypes from 'prop-types';
function ProfileCard({ name, profession, isMember, hobbies=[] }) {  

    return (
        <div style={{ border: '1px solid #ccc', margin: '0 auto', borderRadius: '8px', padding: '20px', maxWidth: '300px', textAlign: 'center' }}>   
    
            <h2 >{name}</h2>
              <h2 >{profession}</h2>
            <p>{isMember ? "Active Member" : " Guest"}</p>
                    <h3>Hobbies:</h3>
                    <ul>
                        {hobbies.map((hobby, index) => {
                            return <li key={index}>{hobby}</li>;
                        })}
                    </ul>
        </div>
    );
}

ProfileCard.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    hobbies: PropTypes.array
};
export default ProfileCard;
