const createId = (): string => `${(+new Date).toString(16)}`

export default createId