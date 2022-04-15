import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
            <Link
                className={'uppercase font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-teal-100 hover:text-red-900'}
                style={{ color: match ? '#f11212' : 'black' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
    );
}

export default CustomLink;