import AboutSection from "@components/AboutSection";
import CTA from "@components/CTABanner";
import MeetTeam from "@components/MeetTeamSection";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'About',
};


export default function About() {
    return (
        <>
            <AboutSection />
            <MeetTeam />
            <CTA />
        </>
    )
};