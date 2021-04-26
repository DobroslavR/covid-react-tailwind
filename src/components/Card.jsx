function Card({ date, confirmed, deaths, recovered }) {
    return (
        <div className='shadow rounded p-8'>
            <div>Date: {date}</div>
            <div>Confirmed: {confirmed}</div>
            <div>Deaths: {deaths}</div>
            <div>Recovered: {recovered}</div>
        </div>
    )
}

export default Card;
