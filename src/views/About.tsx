const styles = {
    container: {
        fontSize: '15px',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100vw',
        margin: '10vh auto',
        ul: {
            listStyleType: 'none'
        },
        section: {
            width: '300px',
        },
        title: {
            color: 'cyan'
        },
        link: {
            textDecoration: 'none'
        }
    }
}

export const About = () => {
    return (
        <div style={ styles.container }>
            <div style={ styles.container.section }>
                <hr />
                <h1 style={ styles.container.title }>Alta Empleados</h1><hr /><br />
                <p>Aplicación CRUD realizado para el challenge Gotam-Upe por{ ' ' }
                    <a style={ styles.container.link } href="https://www.linkedin.com/in/germanmacchia" target="_blank">Germán O. Macchia</a></p>
                <hr />
            </div>
            <div style={ styles.container.section }>
                <h3>Mejoras a realizar:</h3><br />
                <ul style={ styles.container.ul }>
                    <li>Login para admin</li><br />
                    <li>Avatares para empleado</li><br />
                    <li>Responsive design</li>
                </ul>
            </div>
            <div style={ styles.container.section }>
                <h3>Repositorios:</h3><br />
                <ul style={ styles.container.ul }>
                    <li><a style={ styles.container.link } href="https://github.com/GermanMacchia/alta_personal_frt" target="_blank">Front End</a></li><br />
                    <li><a style={ styles.container.link } href="https://github.com/GermanMacchia/alta_personal_bck" target="_blank">Back End</a></li>
                </ul>
            </div>
        </div >
    )
}
