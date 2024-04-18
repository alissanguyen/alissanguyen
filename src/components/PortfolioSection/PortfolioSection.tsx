import * as React from 'react';
import SparkleSVG from '../SparkleSVG';
import ChessImage from "../../asset/chess.png";
import StockImage from "../../asset/stock.png";
import ImgGeneratorImage from "../../asset/image.png";
import SignLanguageImage from "../../asset/sign.png"
import ProjectCard from './ProjectCard';
import "./PortfolioSection.css";

interface Props {

}

const projects = [
    {
        id: "chess",
        name: "Chess Game with AI",
        techStack: ["Python", "PIP", "Sublime Text"],
        thumb: ChessImage
    },
    {
        id: "stock",
        name: "Stock Prediction with Deep Learning",
        techStack: ["Python", "Deep Learning"],
        thumb: StockImage
    },
    {
        id: "imageGenerator",
        name: "AI Image Generator",
        techStack: ["JavaScript", "GPT"],
        thumb: ImgGeneratorImage
    },
    {
        id: "signLanguage",
        name: "Sign Language Detection with TensorFlow",
        techStack: ["Python", "TensorFlow"],
        thumb: SignLanguageImage
    }
]
const PortfolioSection: React.FC<Props> = ({ }) => {
    return (
        <div className='flex flex-col items-start justify-center gap-14 pl-20' id="portfolio">
            <div className='flex flex-row items-center text-2xl gap-3 font-medium rounded-3xl border-2 border-dark-textPrimary px-8 py-2'>
                <SparkleSVG />
                <p>Portfolio</p>
            </div>
            <ul className="FeaturedProjects__Wrapper grid grid-cols-3 gap-10">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</ul>

        </div>
    )
}

export default PortfolioSection