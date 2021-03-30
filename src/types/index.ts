export interface CouchDoc<T> {
    items: Array<T>,
    _id: 'string',
    _rev: 'string'
}

export interface CouchRow<T> {
    doc: CouchDoc<T>,
    id: string,
    key: string,
    value: object
}

export interface Project {
    desc: string,
    logo: string,
    name: string,
    tags: Array<string>,
    type: string,
    url: string
}

export interface Job {
    logo: string,
    company: string,
    title: string,
    start: string,
    end: string,
    desc: string,
    tags: Array<string>
}

export interface School {
    logo: string,
    name: string,
    major: string,
    date: string,
    courses: Array<string>
}
