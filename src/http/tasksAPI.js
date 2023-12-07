import { $authHost, $host } from "./index";

export const createTask = async(title, description, dateEnd, userCreate, userResponsible, statusId, priorityId) => {
    const {data} = await $authHost.post('api/task', {title, description, dateEnd, userCreate, userResponsible, statusId, priorityId})
    return data
}

export const deleteTask = async(id) => {
    const {data} = await $authHost.delete(`api/task/${id}`)
    return data
}

export const updateTaskStatus = async(id, statusId) => {
    const {data} = await $authHost.put('api/task', {id, statusId})
    return data
}

export const fetchTask = async(id) => {
    const {data} = await $authHost.get(`api/task/${id}`)
    return data
}

export const fetchOneTask = async(id) => {
    const {data} = await $authHost.get(`api/task/single/${id}`)
    return data
}

export const fetchStatus = async() => {
    const {data} = await $host.get('api/status')
    return data
}

export const getOneStatus = async(id) => {
    const {data} = await $host.get(`api/status/${id}`)
    return data
}

export const fetchPriority = async() => {
    const {data} = await $host.get('api/priority')
    return data
}

export const getOnePriority = async(id) => {
    const {data} = await $host.get(`api/priority/${id}`)
    return data
}

export const fetchSubuser = async(subordinateId) => {
    const {data} = await $host.get('api/subuser', {
        params: {
            subordinateId: subordinateId
        }
    })
    return data
}