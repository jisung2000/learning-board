type Props={
    title: string,
    body: string
}

function Page({title, body}: Props){
    return(
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Page