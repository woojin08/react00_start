const DATA = [
    { id: 1, name: '김우진', age: 21, sleep: false },
    { id: 2, name: '전우진', age: 27, sleep: true },
    { id: 3, name: '황우진', age: 28, sleep: true }
]


const List = () => {
    return (
        <ul>
            {
                DATA.map(it =>
                    <li key={it.id}>
                        {it.name}은 {it.age}살 {it.sleep ? 'sleeping' : 'playing'}
                    </li>)
            }
        </ul>
    )
}

export default List;