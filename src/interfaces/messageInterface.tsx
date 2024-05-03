export interface messageType {
    _id?: string,
    time?: string,
    text?: string,
    from?: string,
    to?: string,
    type?: 'status' | 'message' | 'private-message'
}