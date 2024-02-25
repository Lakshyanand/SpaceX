import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Spacex = () => {
    
    const [spacex, setSpacex] = useState(null);

    useEffect(() => {
        const loadSpacexData = async () => {
            const data = await fetch ('https://api.spacexdata.com/v4/launches/latest');

            const response = await data.json();

            console.log(response);
            // if(!response.ok) {
            //     throw new Error('some error happened');
            // }

            setSpacex(response);
        }
        loadSpacexData();
    }, []);

    const flexContainer = {
        'display': 'flex',
        'text-align': 'left',
        'padding': '10px'
    }

    if(spacex) {
        return(
            <div style={flexContainer}>
                <div style={{width:'50%', padding:'10px'}}>
                    <h3>SpaceX Latest Launch Info</h3>
                    <h2>{spacex.name}</h2>
                    <p>
                        SpaceX Crew-5 was the fifth operational NASA Commercial Crew
                        Program flight of a Crew Dragon spacecraft, and the eighth
                        overall crewed orbital flight. The mission was successfully
                        launched on 5 October 2022, with the aim of transporting four
                        crew members to the International Space Station (ISS). The
                        Crew Dragon spacecraft docked at the ISS on 6 October 2022 at
                        21:01 UTC.
                    </p>
                </div>
                <div style={{width:'50%', padding:'10px'}}>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${spacex.links.youtube_id}`}
                        width="100%"
                      //  height="415px"
                        controls={true} />
                </div>
            </div>
        );
    }
    
};

export default Spacex;