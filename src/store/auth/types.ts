const TOKEN_ITEM_KEY = 'token';

export interface User {
    id: number;
    isAdmin: boolean;
}

export const UserSerializer = {
    parse(data: any): User {
        return {
            id: data.id,
            isAdmin: data.is_admin,
        };
    },
};

export interface AuthState {
    user?: User;
    isLoggedIn: boolean;
    pending: boolean;
}

export const storedToken = {
    set(token: string) {
        localStorage.setItem(TOKEN_ITEM_KEY, token);
    },
    get(): string {
        return localStorage.getItem(TOKEN_ITEM_KEY) || '';
    },
    remove() {
        localStorage.removeItem(TOKEN_ITEM_KEY);
    },
    isSet(): boolean {
        return !!this.get();
    },
};
