import React, { useEffect, useState } from 'react';
import Planets from './Planets';
import Residents from './Residents';
import axios from "axios";

const Main = () => {
    const [planetData, setPlanetData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://swapi.dev/api/planets/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [residentsInfo, setResidentInfo] = useState();
    const [clickedCard, setClickedCard] = useState(null);

    const planetFunc = async () => {
        setLoading(true);
        const res = await axios.get(url);
        // console.log(res.data);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPlanets(res.data.results);
        setLoading(false)
        // console.log(planetData);
    }

    const getPlanets = async(res) => {
        res.map(async(item) => {
            const result = await axios.get(item.url)
            // console.log(result.data);
            setPlanetData(state=>{
                state = [...state,result.data]
                return state
            })
        })
    }
    const getResidentDetails = async (residentUrl) => {
        const res = await axios.get(residentUrl);
        return res.data;
    }

    const getResidents = async (url) => {
        setLoading(true);
        const res = await axios.get(url);
        const residentUrls = res.data.residents;
        const residentsDetails = [];
        for (const residentUrl of residentUrls) {
            const residentDetails = await getResidentDetails(residentUrl);
            residentsDetails.push(residentDetails);
        }
        setResidentInfo(residentsDetails);
        setLoading(false);
    }
    useEffect(() => {
        planetFunc();
    }, [url])
    return(
        <>
        <div className="container">
            <div className="left-content">
                <Planets planets={planetData} loading={loading} infoResidents={resi=>{getResidents(resi.url); setClickedCard(resi.url);}} clickedCard={clickedCard}/>
            </div>
            <div className="right-content">
                <Residents data={residentsInfo}/>
            </div>
        </div>
        <div className="btn-group">
            { prevUrl && <button onClick={()=>{
                setPlanetData([])
                setUrl(prevUrl)
                setClickedCard(null);
            }}>Previous</button>}

            { nextUrl && <button onClick={()=>{
                setPlanetData([])
                setUrl(nextUrl)
                setClickedCard(null);
            }}>Next</button>}
        </div>
        </>
    )
}
export default Main;