interface Place {
    name: string;
    description: string;
}

function CardExample() {

    const places: Place[] = [
    { name: "Los Angeles", description: "A city in California." },
    { name: "Chicago", description: "A city in Illinois." },
    { name: "Houston", description: "A city in Texas." },
    { name: "Phoenix", description: "A city in Arizona." }
    ];

  return (
    <>
    <div style={
        {display: 'flex',
        flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px'}}>
        {places.map((place, index) => (
            <div className="card" 
                style={
                    {width: '18rem',
                    padding: '5px'}} 
                key={index}>
                <div className="card-body">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text">
                        {place.description}
                    </p>
                <a href="https://google.com" className="btn btn-primary">Go to {place.name} →</a>
                </div>
            </div>))}
    </div>
    </>
  );
}

export default CardExample;