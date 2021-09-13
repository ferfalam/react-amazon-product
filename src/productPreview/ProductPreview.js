import classes from './ProductPreview.module.css'
import React from 'react'

const ProductPreview = (props) => {
    const currentHours = new Date().getHours() > 9 ? new Date().getHours() : '0'+new Date().getHours()
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+new Date().getMinutes()

    return (
        <div className={classes.productPreview}>
            <img src={props.currentPreviewImage} alt="productPreview" />
            {
                props.currentFeaturePos === 1 ?
                    <div className={classes.heartBeatSection}>
                        <i className="fas fa-heartbeat"></i>
                        <p> 78 </p>
                    </div>
                    :
                    <div className={classes.timeSection}>
                        <p> {`${currentHours} : ${currentMinutes}`} </p>
                    </div>
            }
       </div> 
    ) 
}

export default ProductPreview