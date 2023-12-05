/* eslint-disable react/prop-types */

function Hornedbeast(props) {

    return (
        <>
        <h2>{props.beast.title}</h2>
        <img src={props.beast.image_url}></img>
        <p>{props.beast.description}</p>
    </>
    )
}

export default Hornedbeast;