import * as React from 'react';
import "./OtherSkillsSection.css"
import PythonIcon from '../../asset/python.svg'
import AWSIcon from "../../asset/aws-dark.svg"
import CloudflareIcon from "../../asset/cloudflare.svg"
import FirebaseIcon from "../../asset/firebase.svg"
import MongoDBIcon from "../../asset/mongodb.svg"
import PytorchIcon from "../../asset/pytorch.svg"
import ContentfulIcon from "../../asset/contentful.svg"
import Image from 'next/image';

interface Props {

}

const skillBadges = [
    {
        id: 'python',
        name: 'Python',
        icon: PythonIcon
    },
    {
        id: "aws",
        name: "AWS",
        icon: AWSIcon
    },
    {
        id: "cloudflare",
        name: "Cloudflare",
        icon: CloudflareIcon
    },
    {
        id: "mondodb",
        name: "MongoDB",
        icon: MongoDBIcon
    },
    {
        id: "firebase",
        name: "Firebase",
        icon: FirebaseIcon
    },
    {
        id: "contentful",
        name: "Contentful",
        icon: ContentfulIcon
    },
    {
        id: "pytorch",
        name: "Pytorch",
        icon: PytorchIcon
    }
]

const skills = [
    "Writing easily understood, modular, fast, and type-safe code with TypeScript and modern JavaScript syntax and publishing packages to NPM.",
    "Responsive and performant web pages with React or Remix, with and SSR for a better user experience.",
    "Deployment to platforms such as Vercel, Netlify, and Cloudflare to leverage caching and firewalls at the edge.",
    "Creating JAM Stack frontend applications that integrate with modern headless content management systems (CMS) like Contentful and payment APIs like Stripe",
    "Data management with Firestore, Prisma, or Supabase. Use of classic web security principles and user authorization/authentication with Firebase Auth and automated emails with Sendgrid.",
    "Modern UI libraries like TailwindCSS, Headless UI, Framer Motion, etc. to create beautiful, responsive, and accessible web apps quickly."
]
const OtherSkillsSection: React.FC<Props> = ({ }) => {
    return (
        <div className="w-full px-28 grid grid-cols-7 gap-10">
            {skillBadges.map((skillBadge) => (<div key={skillBadge.id}>
                <Image src={skillBadge.icon} alt={skillBadge.name} className="w-32 opacity-40 hover:opacity-100"/>
            </div>))}
        </div>
    )
}

export default OtherSkillsSection