import React from 'react'
import Meta from '@/components/Meta'
import styles from '../styles/Register.module.css'
import pic from '../mages/social-media_flatline.svg'
import Link from 'next/link'
import Leg from '../components/Leg'
import Image from 'next/image'

const Register = () => {
    return <div className={styles.big}>
        <Meta title={'Register'} />

        <div className={styles.boxe}>
            <h2>Sign Up</h2>
            <form>
                <div className={styles.enter}>
                    <input type='text' required />
                    <label>First Name</label>
                </div>
                <div className={styles.enter}>
                    <input type='text' required />
                    <label>Last Name</label>
                </div>
                <div className={styles.enter}>
                    <input type='text' required />
                    <label>Email</label>
                </div>
                <div className={styles.enter}>
                    <input type='text' required />
                    <label>Username</label>
                </div>
                <div className={styles.enter}>
                    <input type='password' required />
                    <label>Password</label>
                </div>
                <div className={styles.enter}>
                    <input type='password' required />
                    <label>Confirm Password</label>
                </div>
                <center>already a member? click <Link href='/login'>here</Link> to sign in</center>
                <button className={styles.lnk}>SUBMIT</button>
            </form>
        </div>
        <div className={styles.pic}>
            <Image src={pic} alt='' />
        </div>

        <Leg />
    </div>
}

export default Register