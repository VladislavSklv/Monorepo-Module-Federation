import React from 'react';

export const UserCard = ({username}: {username?: string}) => {
    return (
        <div style={{border: '1px solid cyan', padding: 20}}>
            <div>username: {username ?? 'user'}</div>
            <div>password: 12345678</div>
        </div>
    );
};