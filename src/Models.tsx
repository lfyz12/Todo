export enum toDoStatus {
    ACTIVE,
    COMPLITED
}

export default interface ITodo {
    id: number,
    text: string
    status: toDoStatus
}