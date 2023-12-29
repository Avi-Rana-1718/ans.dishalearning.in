
export default async function Blog(props) {

    let data = await fetch("@/blog/hello.json");
    let res = await data.json();
    
    console.log(res);

    return (
        <article>
            <h3>ass</h3>
            <time></time>
            <p></p>
        </article>
    )
}