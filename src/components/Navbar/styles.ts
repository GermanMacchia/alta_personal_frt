export const styles = {
    title: {
        fontSize: '2rem',
        color: '#a5e4dc',
        padding: 20,
        borderBottom: '5px solid #2c306f'
    },
    container: {
        height: '15vh',
        backgroundImage: `url(${ "src/assets/banner.jpg" })`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        position: 'relative',
        subtitle: {
            fontSize: '2rem',
            color: '#2c306f',
            position: 'absolute',
            bottom: 10,
            right: 20,
        },
        navbar: {
            borderTop: '5px solid #2c306f',
            borderBottom: '2px solid #242424',
            __blur: {
                filter: 'opacity(0.20)'
            }
        },
    },
}