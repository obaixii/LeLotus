import EmptyState from "../Main/EmptyState"

interface Props {
    active: string;
}

const doctors = [
    {
        name: 'Dr. Aisha Sohail',
        spec: 'Consultant Dermatologist',
        filter: 'dermatologist',
        creds: ['MBBS', 'FCPS Dermatology'],
        bio: 'Specializes in medical and cosmetic dermatology with over 12 years of clinical experience.',
        gender: 'female',
        bg: 'linear-gradient(160deg, #e8d5e8, #c8a8c8)',
    },
    {
        name: 'Dr. Mahnoor Fatima',
        spec: 'Aesthetic Physician',
        filter: 'aesthetician',
        creds: ['MBBS', 'Diploma Aesthetic Medicine'],
        bio: 'Expert in injectables, non-surgical facial rejuvenation, and advanced skin treatments.',
        gender: 'female',
        bg: 'linear-gradient(160deg, #d8e4e8, #b8c8d4)',
    },
    {
        name: 'Dr. Usman Khalid',
        spec: 'Hair Restoration Specialist',
        filter: 'hair',
        creds: ['MBBS', 'PG Diploma Trichology'],
        bio: 'Specializes in hair loss diagnosis, PRP therapies, and advanced hair restoration techniques.',
        gender: 'male',
        bg: 'linear-gradient(160deg, #c8d8e8, #a0bcd4)',
    },
    {
        name: 'Dr. Sana Ilyas',
        spec: 'Aesthetic Physician',
        filter: 'aesthetician',
        creds: ['MBBS', 'Diploma in Laser Medicine'],
        bio: 'Expert in laser treatments, skin resurfacing, and pigmentation correction procedures.',
        gender: 'female',
        bg: 'linear-gradient(160deg, #e8d8e0, #d0b8c8)',
    },
    {
        name: 'Dr. Bilal Tariq',
        spec: 'Body Contouring Specialist',
        filter: 'aesthetician',
        creds: ['MBBS', 'Aesthetic Medicine'],
        bio: 'Specializes in non-surgical body sculpting, fat reduction, and skin tightening procedures.',
        gender: 'male',
        bg: 'linear-gradient(160deg, #d8e8d0, #b8d4b0)',
    },
]

const Silhouette = () => (
    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '60%', opacity: 0.4 }}>
        <circle cx="100" cy="80" r="55" fill="white" />
        <ellipse cx="100" cy="220" rx="70" ry="60" fill="white" />
    </svg>
)

export default function DoctorsList({ active }: Props) {
    const visible = active === 'all'
        ? doctors
        : doctors.filter(d => d.filter === active)

    if (visible.length === 0) return <EmptyState active={active} />

    return (
        <div className="doctors-grid">
            {visible.map((doc) => (
                <div key={doc.name} className="doctor-card">
                    <div className={`doctor-card-img ${doc.gender}`} style={{ background: doc.bg }}>
                        <Silhouette />
                    </div>
                    <div className="doctor-card-body">
                        <h3>{doc.name}</h3>
                        <div className="doctor-spec">{doc.spec}</div>
                        <div className="doctor-creds">
                            {doc.creds.map(c => (
                                <span key={c} className="cred">{c}</span>
                            ))}
                        </div>
                        <p>{doc.bio}</p>
                        <a href="#" className="btn btn-outline" style={{ fontSize: '0.72rem', padding: '8px 18px' }}>View Profile →</a>
                    </div>
                </div>
            ))}

            <div className="doctor-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-light-bg)', borderStyle: 'dashed' }}>
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🌱</div>
                    <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, marginBottom: '8px' }}>Join Our Team</h4>
                    <p style={{ fontSize: '0.82rem' }}>We are always looking for passionate aesthetic professionals.</p>
                </div>
            </div>
        </div>
    );
}