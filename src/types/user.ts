// Interface for user details with full information.
export interface UserDetails {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

// Interface for a simplified user, used in the user list.
export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UserListProps {
    users: User[];
}
