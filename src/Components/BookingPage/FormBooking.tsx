import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import FieldError from './FieldError'

export type BookingFormData = {
    fullName: string
    phone: string
    email: string
    branch: string
    service: string
    date: string
    time: string
    notes?: string
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function FormBooking() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<BookingFormData>()

    const [formState, setFormState] = useState<FormState>('idle')

    const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
        setFormState('submitting')
        try {
            console.log('Booking data (ready for email integration):', data)
            await new Promise(res => setTimeout(res, 1200))
            setFormState('success')
            reset()
        } catch {
            setFormState('error')
        }
    }

    if (formState === 'success') return (
        <div className="booking-form flex flex-col items-center justify-center text-center py-20 gap-4">
            <div className="flex items-center justify-center rounded-full bg-teal/10 border border-teal/25 mb-2"
                style={{ width: 72, height: 72 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0094a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3>Appointment Requested!</h3>
            <p>Thank you! We'll confirm your booking within 24 hours via email or phone.</p>
            <button className="btn btn-primary mt-4" onClick={() => setFormState('idle')}>
                Book Another
            </button>
        </div>
    )

    const e = (field: keyof BookingFormData) => errors[field]?.message

    return (
        <div className="booking-form">
            <h2>Appointment Details</h2>
            <p>Fill in your details and we'll confirm your booking within 24 hours.</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ marginTop: '32px' }}>

                {/* ─── Row: Name + Phone ─── */}
                <div className="form-row">
                    <div className="form-group">
                        <label>Full Name</label>
                        <FieldError message={e('fullName')} />
                        <input
                            type="text"
                            placeholder="Your full name"
                            className={e('fullName') ? 'input-error' : ''}
                            {...register('fullName', { required: 'Full name is required' })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <FieldError message={e('phone')} />
                        <input
                            type="tel"
                            placeholder="+92 300 0000000"
                            className={e('phone') ? 'input-error' : ''}
                            {...register('phone', {
                                required: 'Phone number is required',
                                pattern: { value: /^[+\d\s()-]{7,15}$/, message: 'Enter a valid phone number' }
                            })}
                        />
                    </div>
                </div>

                {/* ─── Email ─── */}
                <div className="form-group">
                    <label>Email Address</label>
                    <FieldError message={e('email')} />
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className={e('email') ? 'input-error' : ''}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' }
                        })}
                    />
                </div>

                {/* ─── Branch ─── */}
                <div className="form-group">
                    <label>Select Branch</label>
                    <FieldError message={e('branch')} />
                    <select
                        className={e('branch') ? 'input-error' : ''}
                        {...register('branch', { required: 'Please select a branch' })}
                    >
                        <option value="">— Choose a Branch —</option>
                        <option value="DHA-2 Islamabad">DHA-2 Islamabad</option>
                        <option value="F8 Islamabad">F8 Islamabad</option>
                        <option value="Multan">Multan</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Peshawar">Peshawar</option>
                        <option value="Karachi">Karachi</option>
                    </select>
                </div>

                {/* ─── Service ─── */}
                <div className="form-group">
                    <label>Select Service</label>
                    <FieldError message={e('service')} />
                    <select
                        className={e('service') ? 'input-error' : ''}
                        {...register('service', { required: 'Please select a service' })}
                    >
                        <option value="">— Choose a Service —</option>
                        <option value="Skin Treatments">Skin Treatments</option>
                        <option value="Hair Restoration">Hair Restoration</option>
                        <option value="Body Contouring">Body Contouring</option>
                        <option value="Injectables">Injectables</option>
                        <option value="Laser Treatments">Laser Treatments</option>
                        <option value="Acne Treatment">Acne Treatment</option>
                        <option value="General Consultation">General Consultation</option>
                    </select>
                </div>

                {/* ─── Row: Date + Time ─── */}
                <div className="form-row">
                    <div className="form-group">
                        <label>Preferred Date</label>
                        <FieldError message={e('date')} />
                        <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className={e('date') ? 'input-error' : ''}
                            {...register('date', { required: 'Please select a date' })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Preferred Time</label>
                        <FieldError message={e('time')} />
                        <select
                            className={e('time') ? 'input-error' : ''}
                            {...register('time', { required: 'Please select a time' })}
                        >
                            <option value="">— Select Time —</option>
                            {['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'].map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* ─── Notes ─── */}
                <div className="form-group">
                    <label>
                        Additional Notes{' '}
                        <span style={{ color: 'var(--color-mid-grey)', fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <textarea
                        placeholder="Tell us about your concerns or any specific questions..."
                        {...register('notes')}
                    />
                </div>

                {/* ─── Error banner ─── */}
                {formState === 'error' && (
                    <p style={{ color: '#e05252', textAlign: 'center', fontSize: '0.82rem', marginBottom: '12px' }}>
                        Something went wrong. Please try again or call us directly.
                    </p>
                )}

                {/* ─── Submit ─── */}
                <button
                    type="submit"
                    className="form-submit"
                    disabled={formState === 'submitting'}
                    style={{ opacity: formState === 'submitting' ? 0.7 : 1 }}
                >
                    {formState === 'submitting' ? 'Sending...' : 'Book Appointment'}
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--color-mid-grey)', textAlign: 'center', marginTop: '14px' }}>
                    We'll confirm your appointment within 24 hours via email or phone.
                </p>
            </form>
        </div>
    )
}