
interface URLsTypes {
    base: string,
    filters: {
        tyres: string,
        disks: string,
        filteredTyres: string,
        filteredDisks: string
    }
}

export const URLs: URLsTypes = {
    base: 'http://217.25.94.79:8000/api',
    filters: {
        tyres: '/filter/tyre',
        disks: '/filter/disk',
        filteredTyres: '/tyre/',
        filteredDisks: '/disk/'
    }
}