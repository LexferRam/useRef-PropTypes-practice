// @ts-check
//commment that enable. type checking for javascript in vs code
import React,{useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

 const App = ({name}) => {

    const elementRef = useRef();

    useEffect(() => {
        //Usando useRef para referenciar un elemento del DOM
        const divElement = elementRef.current;
        console.log(divElement)
    },[])

    return (
        <div ref={elementRef}>
            helloo {name}
        </div>
    )
}


App.propTypes = {
    name: PropTypes.string.isRequired,
}

App.defaultProps = {
    name:"Lexfer Ramirez"
}

export default App
