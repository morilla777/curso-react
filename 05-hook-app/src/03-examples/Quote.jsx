
import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({name, type}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0});

    useLayoutEffect( () => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize( { height, width });
    }, [name])


    return (
      <>
         <blockquote 
            className="blockquote text-end"
            style={{ display: 'flex' }}
        >
            <p ref={ pRef } className="mb-1">{ name }</p>
                <footer className="blockquote-footer">{ type }</footer>
          </blockquote>

          <code>{ JSON.stringify( boxSize ) }</code>
      </>
    )
  }

  Quote.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string
  }

  /*
  export const Quote = ({name, type}) => {
    return (
      <>
         <blockquote className="blockquote text-end">
            <p className="mb-1">{ name }</p>
                <footer className="blockquote-footer">{ type }</footer>
          </blockquote>
      </>
    )
  }
  */