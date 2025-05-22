function Center(props: any){
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
           {props.children}
        </div>
    )
}

export default Center;
