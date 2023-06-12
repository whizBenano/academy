import React from 'react'
import Meta from '@/components/Meta'
import backdrop from '../mages/settings_monochromatic.svg'
import Image from 'next/image'
import styles from '../styles/Reset.module.css'
import Leg from '../components/Leg'

const Reset = () => {
    return <div className={styles.big}>
        <Meta title={'Reset'} />
        
        <div className={styles.one}>
            <h1>Reset your password</h1>
            <div className={styles.enter}>
                <input type='text' required />
                <label>Enter your e-mail</label>
            </div>
            <button>RESET</button>
        </div>
        <div className={styles.pic}>
            <Image src={backdrop} alt='' />
        </div>

        <Leg />
    </div>
}

export default Reset