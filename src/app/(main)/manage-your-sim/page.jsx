"use client"
import React from 'react'
import HeroSection from '../../components/heroSection/page'
import LeftCard from '../../components/utils/managesim-leftcard'
import RightCard from '../../components/utils/manageesim-rightcard'
import EsimInstallationPage from '../../components/utils/esimInstallation'

const ManageYourSim = () => {
    return (
        <>
            <div>
                <HeroSection />
                <div className="flex justify-center items-center min-h-screen bg-[#fef6f2] p-5">
                <main className="flex flex-wrap gap-5 justify-center items-start">
                    <LeftCard />
                    <RightCard />
                </main>
                </div>
                <EsimInstallationPage/>
            </div>
        </>
    )
}

export default ManageYourSim
