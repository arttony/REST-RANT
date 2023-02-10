const React = require('react')
const Def = require('../default')

function Index(data){
    let placesFormatted = data.places.map((place)=>{
        return(
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })
    return(
        <Def>
            <main>
                <p>index</p>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = Index 