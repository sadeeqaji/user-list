import UserList from "components/UserList";
import useFetch from "hooks/useFetch";
import { User } from "types/user";

function Users() {
    const { data: users, loading, error } = useFetch<User[]>(`/users`);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Users</h1>
                {loading && (
                    <div className="bg-blue-100 text-blue-700 p-4 rounded-md">
                        <p className="font-semibold">Loading users...</p>
                    </div>
                )}
                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-md">
                        <p className="font-semibold">Error: {error}</p>
                    </div>
                )}
                {users.length > 0 && <UserList users={users} />}
            </div>
        </div>
    )
}

export default Users