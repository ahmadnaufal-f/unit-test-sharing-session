import styles from './page.module.css'
import Image from 'next/image'

type TeamMembers = {
    name: string
    profilePicturePath: string
}

const teamMembers: TeamMembers[] = [
    {
        name: 'Naufal',
        profilePicturePath: '/images/naufal.webp'
    },
    {
        name: 'Falah',
        // profilePicturePath: '/images/falah.jpg'
        profilePicturePath: '/images/dummy-profile-pic.jpg'
    },
    {
        name: 'Jeffrey',
        // profilePicturePath: '/images/jeffrey.jpg'
        profilePicturePath: '/images/dummy-profile-pic.jpg'
    },
    {
        name: 'Alvin',
        // profilePicturePath: '/images/alvin.jpg'
        profilePicturePath: '/images/dummy-profile-pic.jpg'
    }
]

export default function TeamIntro() {
    return (
        <section className={styles.section}>
            <div className={styles.memberCardContainer}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.memberCard}>
                        <div className={styles.profilePictureContainer}>
                            <Image
                                className={styles.profilePicture}
                                src={member.profilePicturePath}
                                alt={member.name}
                                width={180}
                                height={240}
                                unoptimized={true}
                            />
                        </div>
                        <p className={styles.memberName}>{member.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
