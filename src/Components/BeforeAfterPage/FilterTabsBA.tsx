interface Props {
    active: string;
    setActive: (val: string) => void;
}

const filters = [
    { label: 'All', value: 'all' },
    { label: 'Skin', value: 'skin' },
    { label: 'Hair', value: 'hair' },
    { label: 'Body', value: 'body' },
    { label: 'Injectables', value: 'injectables' },
    { label: 'Laser', value: 'laser' },
]

export default function FilterTabsBA({ active, setActive }: Props) {
    return (
        <div className="filter-tabs" style={{ marginBottom: '40px' }}>
            {filters.map(f => (
                <button
                    key={f.value}
                    className={`filter-tab${active === f.value ? ' active' : ''}`}
                    onClick={() => setActive(f.value)}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
}