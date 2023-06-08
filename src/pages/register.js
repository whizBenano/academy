import React from 'react'
import styles from '../styles/Register.module.css'
import pic from '../mages/social-media_flatline.svg'
import Link from 'next/link'
// import Leg from '../Leg/Leg'

const Register = () => {
    return <div className={styles.big}>
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
            <img src={pic} alt='' />
        </div>

        {/* <Leg /> */}
    </div>
}

export default Register