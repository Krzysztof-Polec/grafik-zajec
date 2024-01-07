import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Content.scss"

const Content = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    axios.get("data.json")
      .then(response => setClasses(response.data.planZajec))
      .catch(error => console.error(error))
  }, [])

  return(
    <main>
      {classes.map(dzien => (
          <div key={dzien.dzien} className="day">
            <h3>{dzien.dzien}</h3>
            <div className="classes">
              {dzien.zajecia.map(zajecie => (
                <div key={zajecie.nazwa}>
                  <p>{zajecie.godzina}</p>
                  <p>{zajecie.nazwa}</p>
                  <p>{zajecie.kategoria}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </main>
  )
}

export default Content