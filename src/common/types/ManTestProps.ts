export type ManTestProps = {
    name: string
    age: number
    lessons: LessonTestProps[]
    address: AddressTestProps
}
type LessonTestProps = {
    title: string
    name?: string
}
