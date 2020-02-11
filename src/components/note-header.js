import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import {Layouts} from '../actions/layout-actions';
import Pin from './pin';

const NoteHeader = ({note, layout, pinNote}) => {
    const {title, isPinned} = note;

    return (
        <div className="d-flex align-items-start justify-content-between">
            <div className="mb-3 h5">
                <Truncate lines={layout === Layouts.GRID ? 2 : 0}>{title}</Truncate>
            </div>

            <Pin note={note} onClick={() => pinNote(note, !isPinned)}/>
        </div>
    );
};

NoteHeader.propTypes = {
    note: PropTypes.object.isRequired,
    layout: PropTypes.string.isRequired,
    pinNote: PropTypes.func.isRequired
};

export default NoteHeader;
