import React from 'react';
import { UserDetails } from 'types/user';
import { User, Mail, Phone, Globe, MapPin, Briefcase } from 'lucide-react';


/**
 * Component to display detailed information about a user.
 * @param user - The user details to display.
 */

const UserInfo: React.FC<{ user: UserDetails }> = ({ user }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Details for {user.name}</h2>
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-blue-500" />
                    <p className="text-gray-800"><strong>Username:</strong> {user.username}</p>
                </div>
                <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <p className="text-gray-800"><strong>Email:</strong> {user.email}</p>
                </div>
                <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <p className="text-gray-800"><strong>Phone:</strong> {user.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-500" />
                    <p className="text-gray-800"><strong>Website:</strong> {user.website}</p>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                        Address:
                    </h3>
                    <p className="text-gray-600 ml-7">
                        {user.address.street}, {user.address.suite}
                    </p>
                    <p className="text-gray-600 ml-7">
                        {user.address.city}, {user.address.zipcode}
                    </p>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <Briefcase className="w-5 h-5 text-blue-500 mr-2" />
                        Company:
                    </h3>
                    <p className="text-gray-800 ml-7"><strong>Name:</strong> {user.company.name}</p>
                    <p className="text-gray-800 ml-7"><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
                    <p className="text-gray-800 ml-7"><strong>BS:</strong> {user.company.bs}</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
