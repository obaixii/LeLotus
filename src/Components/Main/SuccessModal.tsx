
export default function SuccessModal() {
    const closeModal = () => {
        const modal = document.getElementById('success-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    };
    return (
        <div id="success-modal" style={{ display: 'none', position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 2000, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'white', borderRadius: '16px', padding: '48px', maxWidth: '440px', width: '90%', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(100,196,149,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto 20px' }}>✓</div>
                <h3 style={{ marginBottom: '12px', fontFamily: 'var(--font-display)' }}>Appointment Requested!</h3>
                <p style={{ fontSize: '0.9rem', color: '#5a6464', marginBottom: '28px' }}>Thank you! We'll confirm your appointment within 24 hours via email or phone.</p>
                <button className="btn btn-primary" onClick={() => closeModal()} style={{ width: '100%', justifyContent: 'center' }}>Done</button>
            </div>
        </div>)
}
