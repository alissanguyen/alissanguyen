import Link from 'next/link';
import * as React from 'react';
import "./BlogButton.css"

interface Props {

}

const BlogButton: React.FC<Props> = ({ }) => {
    return (
        <div className="BlogButton__Container">
            <Link className="BlogButton" href="/blog">Blog</Link>
        </div>
    )
}

export default BlogButton