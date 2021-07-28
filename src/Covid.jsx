// import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Covid = () => {

    const [result, setState] = useState([])

    const getCocidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const data = await res.json();
        // console.log(data.statewise);
        setState(data.statewise);
    }


    useEffect(() => {
        getCocidData();
    }, [])


    return (
        <>
            <h4 className="heading-h2">Covid Data statewise</h4>
            <table className="table table-striped table-hover  w-100">
                <thead>
                    <tr>
                        <th> no</th>
                        <th> State</th>
                        <th> Confirmed</th>
                        <th> Recoverd</th>
                        <th> Deaths</th>
                        <th> Active Cases</th>
                        <th> Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                   {result.map((d,index) =>{
                       return (
                           <>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{d.state}</td>
                                <td>{d.confirmed}</td>
                                <td>{d.recovered}</td>
                                <td>{d.deaths}</td>
                                <td>{d.active}</td>
                                <td>{d.lastupdatedtime}</td>
                            </tr>
                           </>
                       )
                   })}
                </tbody>
            </table>

        </>
    )
}

export default Covid