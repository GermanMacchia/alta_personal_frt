import banner from '../../assets/banner.jpg'

export const styles = {
    title: {
        fontSize: '1.5rem',
        color: '#a8ffbf',
    },
    container: {
        height: '20vh',
        minHeight: '100px',
        backgroundImage: `url(${ banner })`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        position: 'relative',
        subtitle: {
            fontSize: '2rem',
            color: '#0e6983',
            position: 'absolute',
            bottom: 0,
            right: 30,
        },
        navbar: {
            borderTop: '5px solid #0e6983',
            BorderBottom: '2px solid #0e6983',
            __blur: {
                filter: 'opacity(0.20)'
            }
        },
    },
}