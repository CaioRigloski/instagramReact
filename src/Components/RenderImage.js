import React, { useState, useEffect} from "react"
import './RenderImage.css'

const RenderImage = (img, key, array) => {
  
  const [ elementWillRender, setElementWillRender ] = useState({
    isVisible: true,
    index: 0
  })

// index base outside of interval scope to always take the last index.
let i = elementWillRender.index

  useEffect(() => {
    function setElementStates() {
      const time = setInterval(() => {
        i++
        
        elementWillRender.isVisible ? setElementWillRender({...elementWillRender, isVisible : false, index: i}) : setElementWillRender({...elementWillRender, isVisible : true, index: i})

        clearInterval(time)
      }, 5990 /* some ms to avoid render flickering with fade in and out */)
    }

    // a infinite loop for array index. "-1" ensure that starts at 0.
    if(i < array.length - 1) {
      setElementStates()
    } else {
      // "-1" ensure that the last index was looped.
      i = -1
      setElementStates()
    }
  }, [elementWillRender])
  

  return (
    <img src={img} key={'phone-pic' + key} alt="Erro" className={elementWillRender.index === key ? 'show-element' : 'hide-element'}></img>
  )
}

export default RenderImage