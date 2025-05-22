function CardExample() {

    const places = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <>
    {places.map((place, index) => (
        <div className="card" style={{ 
            width: '18rem',
            padding: '5px',
            margin: '10px' }} 
            key={index}>

            <div className="card-body">
                <h5 className="card-title">{place}</h5>
                <p className="card-text">
                    A wonderful place to travel to!
                </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>))}
    </>
  );
}

export default CardExample;