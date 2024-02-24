import React from 'react'

const Residents = ({data}) => {
    // console.log(data);
    return(
        <>
            {
                (!data)?"":(
                    <>
                        <div className="residentsInfo">
                            {data.map((resident) => (
                                <div key={resident.url} className="residentCard">
                                <div className="residentDetails">
                                    <p>Name: {resident.name}</p>
                                    <p>Height: {resident.height}</p>
                                    <p>Mass: {resident.mass}</p>
                                    <p>Gender: {resident.gender}</p>
                                </div>
                                </div>
                            ))}
                        </div>

                    </>
                )
            }
        </>
    )
}
export default Residents