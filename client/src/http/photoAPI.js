import { $authHost, $host } from "./index"

export const createView = async (view) => {
    const { data } = await $authHost.post("api/view", view)
    return data
}

export const fetchViews = async () => {
    const { data } = await $host.get("api/view")
    return data
}

export const createLocation = async (location) => {
    const { data } = await $authHost.post("api/location", location)
    return data
}

export const fetchLocations = async () => {
    const { data } = await $host.get("api/location")
    return data
}

export const createDevice = async (device) => {
    const { data } = await $authHost.post("api/device", device)
    return data
}

export const fetchDevices = async () => {
    const { data } = await $host.get("api/device")
    return data
}

export const createQuality = async (quality) => {
    const { data } = await $authHost.post("api/quality", quality)
    return data
}

export const fetchQualities = async () => {
    const { data } = await $host.get("api/quality")
    return data
}

export const createColor = async (color) => {
    const { data } = await $authHost.post("api/color", color)
    return data
}

export const fetchColors = async () => {
    const { data } = await $host.get("api/color")
    return data
}

export const createDescription = async (description) => {
    const { data } = await $authHost.post("api/description", description)
    return data
}

export const fetchDescriptions = async () => {
    const { data } = await $host.get("api/description")
    return data
}

export const createPhoto = async (photo) => {
    const { data } = await $authHost.post("api/photo", photo)
    return data
}

export const fetchPhotos = async (viewId, locationId, page, limit = 5) => {
    const { data } = await $host.get("api/photo", {
        params: {
            viewId,
            locationId,
            page,
            limit,
        },
    })
    return data
}

export const fetchOnePhoto = async (id) => {
    const { data } = await $authHost.get("api/photo/" + id)
    return data
}
