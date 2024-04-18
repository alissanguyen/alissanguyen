import * as React from 'react';
import PythonIcon from '../../asset/python.svg'
import AWSIcon from "../../asset/aws-dark.svg"
import CloudflareIcon from "../../asset/cloudflare.svg"
import FirebaseIcon from "../../asset/firebase.svg"
import MongoDBIcon from "../../asset/mongodb.svg"
import PytorchIcon from "../../asset/pytorch.svg"
import ContentfulIcon from "../../asset/contentful.svg"
import Image from 'next/image';
import SkillsSection from '../SkillsSection/SkillsSection';
import TensorFlowIcon from "../../asset/tensorflow.svg"

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
    },
    {
        id: "tensorflow",
        name: "TensorFlow",
        icon: TensorFlowIcon
    }
]

const ToolsAndSkillsSection: React.FC<Props> = ({ }) => {
    return (
        <div className='w-full'>
            <p className="PublishedSoftware__Text text-4xl text-dark-textSecondary font-semibold mb-8">My Tools & Skills</p>
            <div className="line-break-gradient"></div>

            <div className="skill-badges-container grid grid-cols-5 gap-4 w-full mt-8">
                {skillBadges.map((skillBadge) => (
                    <div key={skillBadge.id} className="skill-badge relative w-full flex flex-col gap-3 justify-center items-center p-4 rounded-2xl overflow-hidden">
                        <div className="skill-badge-content flex flex-col items-center relative z-[1] text-center">
                            <Image src={skillBadge.icon} alt={skillBadge.name} className="skill-badge-icon mb-4 w-32 opacity-40" />
                            <span className="skill-badge-name text-xl">{skillBadge.name}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="spacer-div h-12"></div>
            <SkillsSection />
        </div>

    )
}

export default ToolsAndSkillsSection