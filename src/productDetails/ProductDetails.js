import React from 'react'
import classes from './ProductDetails.module.css'

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((colorOption, pos) => {
        const classArr = [classes.productImage]
        if (pos === props.currentPreviewImagePos) {
            classArr.push(classes.selectedImage)
        }
        return <img key={pos}  className={classArr.join(' ')} src={colorOption.imageUrl} alt={colorOption.styleName} onClick={() => props.onClickColorChange(pos)} />
    })

    const featureOptions = props.data.featureList.map((featureOption, pos) => {
        const classArr = [classes.featuresItem]
        if (pos === props.currentFeaturePos) {
            classArr.push(classes.selectedFeature)
        }
        return <button key={pos} className={classArr.join(' ')} onClick={() => props.onClickFeatureChange(pos)}> {featureOption} </button>
    })
    return (
        <div className={classes.productData}>
            <h1 className={classes.producTitle}> {props.data.title} </h1>
            <p className={classes.productDescription}> {props.data.description} </p>
            <h3 className={classes.sectionHeading}> Select Color</h3>
            <div>
                {colorOptions}
                {/* <img className={classes.productImage} src="https://imgur.com/iOeUBV7.png" alt="Black Color" />
                <img className={classes.productImage} src="https://imgur.com/PTgQlim.png" alt="Red Color" />
                <img className={classes.productImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Color" />
                <img className={[classes.productImage, classes.selectedImage].join(' ')} src="https://imgur.com/xSIK4M8.png" alt="Purple Color" /> */}
            </div>
            <h3 className={classes.sectionHeading}>Feature </h3>
            <div>
                {featureOptions}
                {/* <button className={[classes.featuresItem, classes.selectedFeature].join(' ')}> Time </button>
                <button className={classes.featuresItem}> Heart Rate </button> */}
            </div>

            <button className={classes.submitButton}> Buy now </button>
        </div>
    )
}

export default ProductDetails