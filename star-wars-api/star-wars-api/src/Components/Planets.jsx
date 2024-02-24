import React from "react";

const Planets = ({planets, loading, infoResidents, clickedCard}) => {
    // console.log(planets);
    return (
        <>
        {
            loading ? <h1>Loading ...</h1> : 
            planets.map((item) => {
            return (
                <>
                <div className={`card ${clickedCard === item.url ? 'clicked' : ''}`} key={item.name} onClick={() => infoResidents(item)}>
                    <h3>Name : {item.name}</h3>
                    <h3>Climate : {item.climate}</h3>
                    <h3>Population : {item.population}</h3>
                    <h3>Terrain : {item.terrain}</h3>
                </div>
                </>
            );
            })
        }
        </>
    );
};

export default Planets;
