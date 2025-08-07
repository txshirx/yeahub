export const Answer = ({ answer } : { answer: string | null }) => {

    if (!answer) return null

    return (
        <div dangerouslySetInnerHTML={{ __html: answer }} />
    )
}