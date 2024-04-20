import useScrollPosition from '@/hooks/useScrollPosition';
import * as React from 'react';

interface Props {

}

const BlogIndexPage: React.FC<Props> = ({ }) => {

    useScrollPosition('blogIndexPage');

    return (
        <div>Hi</div>
    )
}

export default BlogIndexPage





/**
 * Blog will have these components:
 * 1. blog posts - React, Next, AI/ML, Math
 * 2. random thoughts 
 */