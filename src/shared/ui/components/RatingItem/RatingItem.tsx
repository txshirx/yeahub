import { Colors } from "@/shared/constans/Colors"

type RatingProps = {
    rate?: number | undefined,
    complexity?: number | undefined
}

export const RatingItem = ({ rate, complexity} : RatingProps) => {
    return (
        <div style={{
            padding: '6px 10px',
            maxHeight: 34,
            backgroundColor: Colors.ButtonRatingColor,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: Colors.TextFilter
        }}>
            {rate ? (<span>Рейтинг: <span style={{ backgroundColor: Colors.MainYeahub, padding: '2px 4px', borderRadius: 4, color: 'white'}}>{rate ?? 'неизвестно'}</span></span>) : (<span>Сложность: <span style={{ backgroundColor: Colors.MainYeahub, padding: '2px 4px', borderRadius: 4, color: 'white' }}>{complexity ?? 'неизвестно'}</span></span>)}
        </div>
    )
}