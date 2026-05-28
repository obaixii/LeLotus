type PPListProps = {
    items: string[]
}

export default function PPList({ items }: PPListProps) {
    return (
        <ul className="privacy-list">
            {items.map((item, i) => (
                <li key={i}>
                    <span className="privacy-list-dot" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}