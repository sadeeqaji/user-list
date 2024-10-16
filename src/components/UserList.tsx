import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'types/user';
import { UserCircle, Mail, ChevronRight } from 'lucide-react';


// Define the props expected by the UserList component.
interface UserListProps {
    users: User[];
}

/**
 * Component to display a list of users.
 * @param users - The list of users to display.
 */
const UserList: React.FC<UserListProps> = ({ users }) => {
    const navigate = useNavigate();

    const handleUserClick = (userId: number) => {
        navigate(`/user/${userId}`);
    };

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => handleUserClick(user.id)}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <UserCircle className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                                <div className="flex items-center text-gray-600 mt-1">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <p>{user.email}</p>
                                </div>
                            </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
