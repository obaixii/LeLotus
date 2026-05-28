export type ContactItem = {
    icon: string
    label: string
    value: string
    href?: string
}

export type MetaChip = {
    label: string
    value: string
}

export type SectionGroup = {
    subheading: string
    items: string[]
}

export type Section = {
    id: string
    title: string
    paragraphs?: string[]
    list?: string[]
    groups?: SectionGroup[]        // subheading + list pairs (e.g. s2)
    note?: string                  // teal note block
    contact?: ContactItem[]        // contact card (s13)
    trailingParagraph?: string     // paragraph after a list (e.g. s7, s8, s9)
}

export const privacySections: Section[] = [
    {
        id: 's1',
        title: 'Who We Are',
        paragraphs: [
            "Le Lotus Clinique is Pakistan's premier aesthetic and dermatology clinic, operating under the name Le Lotus Clinique (Private). Our registered office is located at Crystal Heights Plaza 14, Bank Al Habib Building, Main GT Road, DHA Phase 2, Islamabad, Pakistan.",
        ],
    },
    {
        id: 's2',
        title: 'What Information We Collect',
        groups: [
            {
                subheading: 'Information You Provide Directly',
                items: [
                    'Full name, date of birth, and gender',
                    'Contact details including phone number, email address, and home address',
                    'Medical history, existing conditions, allergies, and current medications',
                    'Details of treatments you enquire about or book',
                    'Photographs taken before, during, or after treatment (with your written consent)',
                    'Payment details processed securely through our payment provider',
                    'Messages sent through our website contact form, WhatsApp, or social media',
                ],
            },
            {
                subheading: 'Information Collected Automatically',
                items: [
                    'IP address and browser type when you visit lelotus.pk',
                    'Pages visited and time spent on the website',
                    'Device type (mobile or desktop) and operating system',
                    'Referring website or source that brought you to our site',
                    'Cookie data as described in Section 7 below',
                ],
            },
        ],
    },
    {
        id: 's3',
        title: 'How We Use Your Information',
        list: [
            'To schedule, confirm, and manage your appointment bookings',
            'To assess your suitability for specific treatments based on your medical history',
            'To provide safe, effective, and personalised clinical care',
            'To send appointment reminders and follow-up communications',
            'To respond to enquiries submitted through our website, WhatsApp, or social media',
            'To process payments for services received',
            'To send promotional messages or offers, only where you have opted in',
            'To comply with our legal obligations under Pakistani law',
            'To improve our website, services, and patient experience',
        ],
    },
    {
        id: 's4',
        title: 'Legal Basis for Processing',
        list: [
            'Your consent, which you may withdraw at any time by contacting us',
            'The performance of a contract for the delivery of the treatment or service you have booked',
            'Our legitimate interests in operating a safe and effective medical business',
            'Compliance with legal obligations applicable to healthcare providers in Pakistan',
        ],
    },
    {
        id: 's5',
        title: 'How We Share Your Information',
        paragraphs: [
            'Le Lotus Clinique does not sell, rent, or trade your personal information to third parties under any circumstances. We may share your information only in the following limited situations:',
        ],
        list: [
            'With members of our clinical and administrative team who require it to deliver your care',
            'With external laboratories, diagnostic services, or referral practitioners involved in your treatment',
            'With IT and software service providers who support our booking and communication systems, under strict data processing agreements',
            'With regulatory or law enforcement authorities where required by Pakistani law',
            'With your explicit written consent, for example when referring you to another specialist',
        ],
        note: 'We never share your before and after photographs or medical records publicly without your written consent. Photographs may be used in clinic records only.',
    },
    {
        id: 's6',
        title: 'Data Retention',
        paragraphs: [
            'We retain patient records for a minimum of 7 years from the date of your last treatment, in accordance with medical record-keeping requirements in Pakistan. After this period, your data will be securely deleted or anonymised.',
            'Marketing preferences and non-clinical enquiry data are retained for 2 years from the date of last contact, after which they are deleted.',
        ],
    },
    {
        id: 's7',
        title: 'Cookies',
        paragraphs: [
            'Our website uses cookies to improve your browsing experience and understand how visitors use our site.',
        ],
        list: [
            'Essential cookies: required for the website to function correctly',
            'Analytics cookies: used to understand visitor behaviour using tools such as Google Analytics',
            'Marketing cookies: used to track the effectiveness of our advertising campaigns',
        ],
        trailingParagraph: 'You can control or disable cookies through your browser settings at any time. Disabling essential cookies may affect the functionality of our website.',
    },
    {
        id: 's8',
        title: 'Data Security',
        paragraphs: [
            'We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or misuse:',
        ],
        list: [
            'Encrypted storage of patient records',
            'Password-protected internal systems with restricted access',
            'Regular staff training on data protection and confidentiality',
            'Secure disposal of physical records when no longer needed',
        ],
        trailingParagraph: 'If you have reason to believe your data has been compromised, please contact us immediately at info@lelotusc.com.',
    },
    {
        id: 's9',
        title: 'Your Rights',
        list: [
            'The right to access the personal information we hold about you',
            'The right to correct inaccurate or incomplete information',
            'The right to request deletion of your data, subject to legal and clinical retention obligations',
            'The right to withdraw your consent for marketing communications at any time',
            'The right to object to the processing of your data in certain circumstances',
        ],
        trailingParagraph: 'To exercise any of these rights, contact us at info@lelotusc.com. We will respond within 30 days.',
    },
    {
        id: 's10',
        title: "Children's Privacy",
        paragraphs: [
            'Le Lotus Clinique does not knowingly collect personal data from individuals under the age of 18 without the written consent of a parent or legal guardian. Where a minor is receiving treatment, all consent and communication will be managed through their parent or guardian.',
        ],
    },
    {
        id: 's11',
        title: 'Third-Party Links',
        paragraphs: [
            'Our website may contain links to third-party websites, including our social media profiles. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies separately.',
        ],
    },
    {
        id: 's12',
        title: 'Changes to This Policy',
        paragraphs: [
            'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The updated policy will always be published on this page with a revised effective date. We encourage you to review this page periodically.',
        ],
    },
    {
        id: 's13',
        title: 'Contact Us',
        contact: [
            { icon: '📍', label: 'Address', value: 'Crystal Heights Plaza 14, Bank Al Habib Building, Main GT Road, DHA Phase 2, Islamabad' },
            { icon: '✉️', label: 'Email', value: 'info@lelotusc.com', href: 'mailto:info@lelotusc.com' },
            { icon: '📞', label: 'Phone', value: '+92 335 5181166', href: 'tel:+923355181166' },
            { icon: '🌐', label: 'Website', value: 'lelotus.pk', href: 'https://lelotus.pk' },
        ],
    },
]

export const privacyMeta: MetaChip[] = [
    { label: 'Effective Date', value: '1 July 2025' },
    { label: 'Last Updated', value: '1 July 2025' },
    { label: 'Applies To', value: 'All Pakistan Locations' },
]