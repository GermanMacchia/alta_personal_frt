import { BorderBottom } from "@mui/icons-material"

export const styles = {
    title: {
        fontSize: '1.5rem',
        color: '#a8ffbf',
    },
    container: {
        height: '20vh',
        minHeight: '100px',
        backgroundImage: `url(${ "https://img.freepik.com/vector-gratis/fondo-geometrico-plano_23-2148957201.jpg?w=2000" })`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        position: 'relative',
        subtitle: {
            fontSize: '2rem',
            color: '#0e6983',
            position: 'absolute',
            bottom: 0,
            right: 30,
        }
    },
    navbar: {
        borderTop: '5px solid #0e6983',
        BorderBottom: '2px solid #0e6983'
    },
    blur: {
        filter: 'opacity(0.20)'
    }
}