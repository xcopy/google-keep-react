import React from 'react';
import {Card} from 'react-bootstrap';
import Truncate from 'react-truncate';
import {Layouts} from '../actions/layout-actions';

const NoteBody = ({title, content, layout}) => {
    const isGrid = layout === Layouts.GRID;

    return (
        <Card.Body className="pt-0">
            {title || content ? (
                <>
                    {title && (
                        <Card.Title>
                            <Truncate lines={isGrid ? 2 : 0}>{title}</Truncate>
                        </Card.Title>
                    )}
                    {content && (
                        <Card.Text>
                            <Truncate lines={isGrid ? 7 : 0}>{content}</Truncate>
                        </Card.Text>
                    )}
                </>
            ) : (
                <h4 className="m-0 text-muted">Empty note</h4>
            )}
        </Card.Body>
    );
};

export default NoteBody;
