import React from 'react'
import Allisters from '../../Destinations/Allisters'
import "../popular/MostPopular.css"

const DestinationsHome = () => {
  return (
      <>
          <section className="popular top">
              <div className="full_container">
                  <div className="heading">
                      <h1>Most Popular Destinations</h1>
                      <div className="line"></div>
                  </div>
                  <div className="content">
                      <Allisters />
                  </div>
              </div>
          </section>
    </>
  )
}

export default DestinationsHome