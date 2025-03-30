import React from 'react';

function ProfileCard({ name, age, children }) {
    return (
        <div className="ProfileCard">
            <h3 className="name">User Name: {name}</h3>
            <h3 className="lastname">Age: {age}</h3>
            <div className="actions">{children}</div>
        </div>
    );
}

export default ProfileCard;