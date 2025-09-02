import { Colors } from "@/shared/constans/Colors"

export const Button = ({text, clearFilters} : { text: string, clearFilters: () => void }) => {
    
    return (
        <button onClick={() => clearFilters()} style={{
            maxWidth: 200,
            backgroundColor: "white",
            padding: '15px 30px',
            borderRadius: 12,
            border: '1px solid',
            borderColor: Colors.MainYeahub,
            color: Colors.MainYeahub
        }}>
            {text}
        </button>
    )
}