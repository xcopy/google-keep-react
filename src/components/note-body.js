import React from 'react';
import Truncate from 'react-truncate';
import {Layouts} from '../actions/layout-actions';

const NoteBody = ({title, content, layout}) => {
    const isGrid = layout === Layouts.GRID;

    return (
        <>
            {title || content ? (
                <>
                    {title && (
                        <div className="mb-3 h5">
                            <Truncate lines={isGrid ? 2 : 0}>{title}</Truncate>
                        </div>
                    )}
                    {content && (
                        <div className="mb-3">
                            <Truncate lines={isGrid ? 7 : 0}>{content}</Truncate>
                        </div>
                    )}
                </>
            ) : (
                <h4 className="m-0 text-muted">Empty note</h4>
            )}
        </>
    );
};

export default NoteBody;
