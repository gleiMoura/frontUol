export interface messageType {
    _id?: string,
    time?: string,
    text?: string,
    from?: string,
    to?: string,
    type?: 'status' | 'message' | 'private-message'
};

export interface userType {
    name: string;
    setName: (name: string) => void;
}

export interface errorType {
    errorText: string;
    setErrorText: (errorText: string) => void;
}
