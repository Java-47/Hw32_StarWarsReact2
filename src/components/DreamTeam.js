import React from 'react'
import { friends } from '../utils/constants';

const DreamTeam = () => {
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((item, index) => {
                if (index === 6)
                {return <img className="col-4 p-1 bottomLeft" src={item} alt="friend" />}
                else if (index === 8)
                {return <img className="col-4 p-1 bottomRight" src={item} alt="friend" />}
                else
                {return <img className="col-4 p-1" src={item} alt="friend" />}
                }) }


        </section>
    )
}

export default DreamTeam