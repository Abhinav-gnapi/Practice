import './UserCardStyle.css'

function Card(data) {
    return (
        <>
        <div className={`card ${data.class}`}>
            <p className='nameP'>Name: <b>{data.name}</b></p>
            {/* <h3 className='nameH'>{data.name}</h3> */}
            <p>Age: {data.age}</p>
            <p>Positon: {data.position}</p>
        </div>
        </>
    )
}
export default Card;