function MyDateGreeter(){
    const date = new Date();
    const hours = date.getHours();
    console.log(hours);

    let greating;
    let customStyle = {
        color: ""
    };
    if(hours < 12) {
        greating = "Good Morning"
        customStyle.color = "red"
    } else if(hours>=12 && hours<18){
        greating ="Good Afternoon"
        customStyle.color = "blue"
    } else {
        greating = "Good Evening"
        customStyle.color = "green"
    }

    return (
        <>
        <h3 style={customStyle}>{greating}</h3>
        </>
    )
}
export default MyDateGreeter;