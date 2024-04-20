import useScrollPosition from '@/hooks/useScrollPosition';
import * as React from 'react';

interface Props {

}

const BlogPostPage: React.FC<Props> = ({ }) => {

    useScrollPosition('blogPost');

    return (
        <div>Individual blog post page</div>
    )
}

export default BlogPostPage