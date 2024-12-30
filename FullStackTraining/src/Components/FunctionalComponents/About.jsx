const About=(props)=>{
    return (
        <section>
        <h1>this is about page</h1>
        {/* eslint-disable-next-line react/prop-types*/}
        <h2>i am teaching in {props.college}</h2>
        {/* eslint-disable-next-line react/prop-types*/}
        <h3>also clg like {props.clg1},{props.clg2}</h3>
        </section>
    );
}
export default About;