import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountReview from './AccountReview';

function TippyAccountReview({ data, delay = [800, 500], offset = [0, 0], placement = 'bottom-start', children }) {
    const [_placement, setPlacement] = useState(placement)
    const [_offset, setOffset] = useState(offset)

    useEffect(() => {
        if (window.innerWidth < 1072) {
            setPlacement('right')
            setOffset([60, 9])
        }
    }, [])

    const renderPreview = attrs => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountReview data={data} />
            </PopperWrapper>
        </div>
    )

    return (
        <div>
            <Tippy
                delay={delay}
                offset={_offset}
                interactive
                render={renderPreview}
                placement={_placement}
                appendTo={document.body}
            >
                {children}
            </Tippy>
        </div>
    );
}

TippyAccountReview.propTypes = {
    data: PropTypes.object.isRequired,
    delay: PropTypes.array,
    offset: PropTypes.array,
    placement: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default TippyAccountReview;