import React from 'react'
import Card from './Card'


function Home() {
    return (
        <div className='row'>
            <Card />
            <Card save={false} hover={false}/>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Home