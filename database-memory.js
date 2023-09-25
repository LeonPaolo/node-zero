import { randomUUID } from 'node:crypto'

export class DatabaseMenory {
    #videos =  new Map()

    //    return this.#videos.values()
    list(search) {
    return Array.from(this.#videos.entries())
        .map((viedoArray) => {
            const id = viedoArray[0]
            const data = viedoArray[1]

            return {
                id,
                ...data,
            }
        })
        .filter(video => {
            if (search) {
                return video.title.includes(search)
            }
            return true
        })
    }

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}