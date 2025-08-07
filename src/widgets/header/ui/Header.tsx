import { Colors } from "@/shared/constans/Colors";
import LogoIcon from "@/shared/ui/Icons/LogoIcon";

export default function Header() {
    return (
        <header
            style={{
                height: 64,
                position: 'fixed',
                backgroundColor: '#ffffff',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    width: 1200,
                    marginInline: 'auto',
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 16,
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: 50,
                        minWidth: 170,
                        fontSize: 22,
                        color: Colors.TextLogo,
                        fontWeight: 800,
                        alignItems: 'center',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center', 
                            gap: 8
                        }}>
                            <LogoIcon/>
                            <span>Yeahub</span>
                        </div>
                        <div style={{
                            
                        }}>
                            <button style={{ fontSize: 16, marginRight: 20 }}>База вопросов</button>
                            <button style={{ fontSize: 16 }}>Тренажер</button>
                        </div>
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        gap: 15
                    }}>
                        <button style={{ color: Colors.MainYeahub }}>Вход</button>
                        <button style={{ borderRadius: 12, padding: '13px 13px', backgroundColor: Colors.MainYeahub, color: 'white'}}>Регистрация</button>
                    </div>
                </div>
                
            </div>
        </header>
    )
}