import '../../assets/css/Home.css'
var Home=()=>{
    var styling ={
        fontSize:"30px",
        color:"blue",
        textDecoration:"underline"
    }
    return(
        <header>
        <h1 style={styling}>Home</h1>
        <h2 id="idSEg">testing styling</h2>
        <p className="box-model">hello</p>
       </header>
    );
};


export default Home;