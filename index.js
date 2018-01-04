export default (instance, callback) => {
    instance.interceptors.request.use((request) => {
        request.ts = performance.now()
        return request
    })

    instance.interceptors.response.use((response) => {
        callback(Number(performance.now() - response.config.ts))
        return response
    })
}