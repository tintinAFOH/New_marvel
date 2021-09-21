import React, {useRef, useEffect, useState, Fragment} from 'react'

const Landing = () => {
  const [btn, setbtn] = useState(false);
  console.log(btn);


  useEffect(() => {
    refwolverine.current.classList.add('startingImg');
    setTimeout(() => {
      refwolverine.current.classList.remove('startingImg');
     setbtn(true);
    }, 1000);
  }, [])
  
  const setLeftImg = () => {
  refwolverine.current.classList.add('leftImg');
}
  const setRightImg = () => {
    refwolverine.current.classList.add('rightImg');
  }

  const clearImg = () => {
    // refwolverine.current.classList.remove('leftImg');
    if (refwolverine.current.classList.contains('leftImg')) {
      refwolverine.current.classList.remove('leftImg');
    } else if (refwolverine.current.classList.contains('rightImg')){
      refwolverine.current.classList.remove('rightImg')
    }
  }
  const displaybtn = btn && (

    <Fragment>
       <div className="leftBox" onMouseOver={setLeftImg} onMouseOut={clearImg}>
          <button className="btn-welcome">Inscription</button>
        </div>
            <div className="rightBox" onMouseOut={clearImg} onMouseOver={setRightImg}>
          <button className="btn-welcome">Connexion</button>
        </div>
    </Fragment>
  )

  const refwolverine = useRef(null);
  // console.log(refwolverine);


    return (
      <main ref={refwolverine}  className="welcomePage">
       {displaybtn}
      </main>
  ) 
}

export default Landing
