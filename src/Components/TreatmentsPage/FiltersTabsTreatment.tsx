interface Props {
    active: string;
    setActive: (val: string) => void;
}

const filters = ['all', 'skin', 'hair', 'body', 'injectables', 'laser']

export default function FiltersTabsTreatment({ active, setActive }: Props) {
    return (
        <div className="filter-tabs">
            {filters.map(f => (
                <button
                    key={f}
                    className={`filter-tab${active === f ? ' active' : ''}`}
                    onClick={() => setActive(f)}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    );
}