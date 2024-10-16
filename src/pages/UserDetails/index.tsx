import UserInfo from 'components/UserInfo';
import useFetch from 'hooks/useFetch';
import React from 'react';
import { useParams } from 'react-router-dom';
import { UserDetails as UserDetailsType } from 'types/user';

const UserDetails: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const { data: user, loading, error } = useFetch<UserDetailsType>(`/users/${userId}`);


    if (loading) {
        return <p className="text-blue-500">Loading user details...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!user) {
        return null;
    }

    return (
        <div>
            <UserInfo user={user} />
        </div>
    );
};

export default UserDetails;
