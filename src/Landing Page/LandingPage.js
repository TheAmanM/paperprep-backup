import React from 'react'
import Heading from './components/Heading'
import FeatureText from './components/FeatureText'
import EmailCapture from './components/EmailCapture'
import GraduationImage from './components/GraduationImage'
import './LandingPage.css'

import { addDoc } from '@firebase/firestore'
import {emailsRef} from './../services/firebase'

const LandingPage = (userEmail) => {

    const sendEmail = async () => {
        const emailDocRef = await addDoc(emailsRef, {
            email: userEmail
        });
        console.log(`Created email document with reference: ${emailDocRef.id}`)
    }

    return (
        <div className='landing-page'>
            <div className="max" />
            <div className="grid">
                <div className="margin">
                    <Heading />
                    <FeatureText />
                </div>
                <GraduationImage />
            </div>
            <div className="max2" />
            <EmailCapture />
        </div>
    )
}

export default LandingPage