export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: {
            data: number
        },
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}