import './ItemDetail.css';

export const ItemDetail = ({item})=>{
    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>item detail</p>
            <div className='img-container'>
                <img src={item.pictureURL} alt={item.nombre}/>
            </div>
            <div className='img-container'>
                <h4>{item.nombre}</h4>
                <h5>{item.precio}</h5>
            </div>
        </div>
    )
}