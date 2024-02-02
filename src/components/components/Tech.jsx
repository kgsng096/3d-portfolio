import { useState, useEffect } from "react"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../../hoc"
import { technologies } from "../../constants"
import { styles } from "../../styles"

const Tech = () => {

  const [isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
     const mediaQuery = window.matchMedia('(max-width:500px)');
     setIsMobile(mediaQuery.matches);

     const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return() => {
        mediaQuery.removeEventListener('change',handleMediaQueryChange)
      }
     }
  },[])

  console.log('chckking', isMobile)

  return (
    <div
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((technology) => (
        isMobile ? 
              <div 
              className="w-28 h-28"
              key={technology.name}
            >
              <p className={styles.sectionSubText}>{technology.name}</p>
            </div> : 
              <div 
              className="w-28 h-28"
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
              <p className={styles.sectionSubText}>{technology.name}</p>
            </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,'')