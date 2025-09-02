export const Answer = ({ answer } : { answer: string }) => {

    if (!answer) return null

    return (
        <div dangerouslySetInnerHTML={{ __html: answer }} />
    )
}