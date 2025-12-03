import './Cardmodule.css'

function Card(data) {
    return (
        <>
        <div className={`card ${data.class}`}>
            <h3>{data.name}</h3>
            <img src={data.img} alt={data.imgAlt} />
            <h4 className="price">{data.price}</h4>
        </div>
        </>
    )
}
export default Card;