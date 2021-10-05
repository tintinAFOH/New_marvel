import React, {useRef, useEffect, useState, Fragment} from 'react'
import {Link} from 'react-router-dom';
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
          <Link className="btn-welcome" to="/signup">Inscription</Link>
        </div>
            <div className="rightBox" onMouseOut={clearImg} onMouseOver={setRightImg}>
          <Link className="btn-welcome" to="/login">Connexion</Link>
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
