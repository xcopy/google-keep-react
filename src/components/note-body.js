import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import {Layouts} from '../actions/layout-actions';
import Moment from 'react-moment';

const NoteBody = ({note, layout}) => {
    const {content, created_at} = note;

    return (
        <>
            {content ? (
                <div className="mb-3">
                    <Truncate lines={layout === Layouts.GRID ? 7 : 0}>{content}</Truncate>
                </div>
            ) : (
                <h4 className="mb-3 text-muted">Empty note</h4>
            )}

            <div className="mb-3 text-muted small">
                Created <Moment fromNow>{created_at}</Moment>
            </div>
        </>
    );
};

NoteBody.propTypes = {
    note: PropTypes.object.isRequired,
    layout: PropTypes.string.isRequired
};

export default NoteBody;
